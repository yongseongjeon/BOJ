const customInput = `5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0
`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const [M, N, H] = stdin.split('\n').shift().split(' ');
const rest = stdin
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '));

const box = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
);
const v = Array.from({ length: H }, () =>
  Array.from({ length: N }, () => Array.from({ length: M }, () => false))
);

for (let h = 0; h < H; h += 1) {
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      box[h][i][j] = rest[h * N + i][j];
    }
  }
}

const dx = [1, 0, 0, -1, 0, 0];
const dy = [0, 0, -1, 0, 0, 1];
const dz = [0, -1, 0, 0, 1, 0];

const isAllTomatoesRipe = box.flat(2).every((x) => x === '1' || x === '-1');
if (isAllTomatoesRipe) {
  console.log(0);
} else {
  dfs();
  const hasUnripeTomato = box.flat(2).includes('0');
  if (hasUnripeTomato) {
    console.log(-1);
  } else {
    console.log(Math.max(...box.flat(2)) - 1);
  }
}

function dfs() {
  const q = findTomato();
  let qIdx = 0;
  while (q.length) {
    const cur = q[qIdx];
    if (cur === undefined) break;
    for (let i = 0; i < 6; i += 1) {
      const nx = dx[i] + cur[0];
      const ny = dy[i] + cur[1];
      const nz = dz[i] + cur[2];
      if (
        validateRange(nx, ny, nz) &&
        !v[nz][ny][nx] &&
        box[nz][ny][nx] === '0'
      ) {
        v[nz][ny][nx] = true;
        box[nz][ny][nx] = +box[cur[2]][cur[1]][cur[0]] + 1;
        q.push([nx, ny, nz]);
      }
    }
    qIdx += 1;
  }
}

function findTomato() {
  const tomatoLoca = [];
  for (let h = 0; h < H; h += 1) {
    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < M; j += 1) {
        if (box[h][i][j] === '1') {
          tomatoLoca.push([j, i, h]);
        }
      }
    }
  }
  return tomatoLoca;
}
function validateRange(x, y, z) {
  return x >= 0 && y >= 0 && z >= 0 && x < M && y < N && z < H;
}
