// const stdin = require('fs').readFileSync('/dev/stdin').toString();
const stdin = `5
0 0 0 0 0
0 1 1 1 0
0 1 2 1 0
0 1 1 1 0
0 0 0 0 0
`;

const [N, ...rest] = stdin.split('\n');
const maps = rest.map((x) => x.split(' ').map((x) => x / 1));
const max = getMaxValFrom2DArray(maps);
const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let c = [];
let cnt = 0;

for (let rain = 0; rain < max; rain += 1) {
  const v = create2DArray(N);
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (!v[i][j] && maps[i][j] > rain) {
        dfs([i, j], rain, v);
        cnt += 1;
      }
    }
  }
  c.push(cnt);
  cnt = 0;
}
console.log(Math.max(...c));

function dfs(start, rain, v) {
  const s = [start];
  v[start[0]][start[1]] = true;
  while (s.length) {
    const cur = s.pop();
    const c = moves
      .map((m) => {
        const dy = cur[0] + m[0];
        const dx = cur[1] + m[1];
        return [dy, dx];
      })
      .filter(
        (x) =>
          validateRange(x[0], x[1], N) &&
          !v[x[0]][x[1]] &&
          maps[x[0]][x[1]] > rain
      )
      .map((x) => {
        v[x[0]][x[1]] = true;
        return x;
      });
    s.push(...c);
  }
}
function create2DArray(N) {
  return Array.from({ length: N }).map(() =>
    Array.from({ length: N }).fill(false)
  );
}
function validateRange(x, y, N) {
  return x >= 0 && y >= 0 && x < N && y < N;
}
function getMaxValFrom2DArray(array) {
  return Math.max(...array.flat(1));
}
