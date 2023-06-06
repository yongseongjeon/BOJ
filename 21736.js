function getInput() {
  const isLinux = process.platform === "linux";
  if (isLinux) {
    return require("fs").readFileSync("/dev/stdin").toString().trim();
  }
  return customInput.trim();
}

const customInput = `3 5
OOOPO
OIOOX
OOOXP
`;

const [a, ...b] = getInput().split("\n");
const [N, M] = a.split(" ").map(Number);
const map = b.map((x) => x.split(""));
const v = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];
const answer = dfs();
console.log(answer ? answer : "TT");
function dfs() {
  const [iy, ix] = findDoYeon();
  v[iy][ix] = true;
  const s = [[iy, ix]];
  let personCnt = 0;
  while (s.length > 0) {
    const [cy, cx] = s.pop();
    const isPerson = map[cy][cx] === "P";
    if (isPerson) personCnt += 1;
    for (let i = 0; i < 4; i += 1) {
      const ny = cy + dy[i];
      const nx = cx + dx[i];
      if (canMove(ny, nx)) {
        s.push([ny, nx]);
        v[ny][nx] = true;
      }
    }
  }
  return personCnt;
}
function findDoYeon() {
  const rowLen = map[0].length;
  const columnLen = map.length;
  for (let y = 0; y < columnLen; y += 1) {
    for (let x = 0; x < rowLen; x += 1) {
      if (map[y][x] === "I") {
        return [y, x];
      }
    }
  }
}
function canMove(y, x) {
  return validateLength(y, x) && !v[y][x] && map[y][x] !== "X";
}
function validateLength(y, x) {
  return y >= 0 && x >= 0 && y < N && x < M;
}

