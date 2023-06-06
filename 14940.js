function getInput() {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
}

const customInput = `3 3
2 0 1
0 1 1
1 1 1
`;

const [f, ...rest] = getInput().split('\n');
const [n, m] = f.split(' ').map(Number);
const map = rest.map((x) => x.split(' '));
const v = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

const stratIdx = findStartIdx();
const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

bfs();
// 방문 안한곳중에서 벽 아닌곳 -1로 칠하면 될듯
for (let y = 0; y < n; y += 1) {
  for (let x = 0; x < m; x += 1) {
    if (!v[y][x] && map[y][x] !== '0') {
      map[y][x] = -1;
    }
  }
}
console.log(map.map((x) => x.join(' ')).join('\n'));

function bfs() {
  const [sy, sx] = stratIdx;
  const q = [[sy, sx, 0]];
  v[sy][sx] = true;
  map[sy][sx] = 0;
  let i = 0;
  while (!!q[i]) {
    const [cy, cx, cd] = q[i];
    i += 1;
    for (let j = 0; j < 4; j += 1) {
      const ny = cy + dy[j];
      const nx = cx + dx[j];
      if (validateRange(ny, nx) && !v[ny][nx] && map[ny][nx] !== '0') {
        v[ny][nx] = true;
        map[ny][nx] = cd + 1;
        q.push([ny, nx, cd + 1]);
      }
    }
  }
}
function validateRange(y, x) {
  return y >= 0 && x >= 0 && y < n && x < m;
}
function findStartIdx() {
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < m; x += 1) {
      if (map[y][x] === '2') {
        return [y, x];
      }
    }
  }
}
