const getInput = () => {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
};
const customInput = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR
`;
const stdin = getInput();
const [N, ...rest] = stdin.split('\n');
const painting = rest.map((x) => x.split(''));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const v = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);
let normalCnt = 0;
for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (!v[i][j]) {
      normalDfs(i, j, v);
      normalCnt += 1;
    }
  }
}

const v2 = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);

let colorBlindnessCnt = 0;
for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (!v2[i][j]) {
      colorBlindnessDfs(i, j, v2);
      colorBlindnessCnt += 1;
    }
  }
}

console.log(normalCnt, colorBlindnessCnt);

function normalDfs(iy, ix, v) {
  const s = [[iy, ix]];
  v[iy][ix] = true;
  while (s.length > 0) {
    const [cy, cx] = s.pop();
    for (let i = 0; i < 4; i += 1) {
      const ny = cy + dy[i];
      const nx = cx + dx[i];
      if (
        isValidRange(ny, nx) &&
        !v[ny][nx] &&
        painting[ny][nx] === painting[iy][ix]
      ) {
        s.push([ny, nx]);
        v[ny][nx] = true;
      }
    }
  }
}

function colorBlindnessDfs(iy, ix, v) {
  const s = [[iy, ix]];
  v[iy][ix] = true;
  while (s.length > 0) {
    const [cy, cx] = s.pop();
    for (let i = 0; i < 4; i += 1) {
      const ny = cy + dy[i];
      const nx = cx + dx[i];
      if (isValidRange(ny, nx) && !v[ny][nx]) {
        if (painting[iy][ix] === 'B') {
          if (painting[ny][nx] === 'B') {
            s.push([ny, nx]);
            v[ny][nx] = true;
          }
        } else {
          if (painting[ny][nx] !== 'B') {
            s.push([ny, nx]);
            v[ny][nx] = true;
          }
        }
      }
    }
  }
}

function isValidRange(y, x) {
  return x >= 0 && y >= 0 && x < N && y < N;
}
