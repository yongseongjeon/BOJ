const getInput = () => {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
};
const customInput = `4 4
0111
1111
1111
1110
`;
const stdin = getInput();
const [NM, ...rest] = stdin.split('\n');
const [N, M] = NM.split(' ').map(Number);
const map = rest.map((x) => x.split('').map(Number));
const v = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array.from({ length: 2 }, () => false))
);

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

function validateRange(y, x) {
  return y >= 0 && x >= 0 && y < N && x < M;
}

const disatnce = bfs();
console.log(disatnce);

function bfs() {
  const q = [];
  let i = 0;
  q.push({ y: 0, x: 0, dist: 1, broken: 0 });
  v[0][0][0] = true;
  let arrived = false;
  while (q.length > i) {
    const cur = q[i++];
    const isTarget = cur.y === N - 1 && cur.x === M - 1;
    if (isTarget) {
      arrived = true;
    }
    for (let i = 0; i < 4; i += 1) {
      const ny = dy[i] + cur.y;
      const nx = dx[i] + cur.x;
      if (validateRange(ny, nx) && !v[ny][nx][cur.broken]) {
        if (map[ny][nx] === 0) {
          q.push({ y: ny, x: nx, dist: cur.dist + 1, broken: cur.broken });
          v[ny][nx][cur.broken] = true;
        } else if (map[ny][nx] === 1 && cur.broken === 0) {
          q.push({ y: ny, x: nx, dist: cur.dist + 1, broken: cur.broken + 1 });
          v[ny][nx][cur.broken] = true;
        }
      }
    }
  }
  const distances = q
    .filter((x) => x.y === N - 1 && x.x === M - 1)
    .map((x) => x.dist);
  return arrived ? Math.min(...distances) : -1;
}
