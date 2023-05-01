const customInput = `2 2
1 -1
-1 1
`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const [firstLine, ...rest] = stdin.split('\n');
const [M, N] = firstLine.split(' ').map(Number);
const tomatoes = rest.map((r) => r.split(' ').map(Number));
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const tomatoLocations = findRipeTomatoLocations();
bfs(tomatoLocations);

const flattenTomatoes = tomatoes.flat(1);
const hasUnripetomatoes = flattenTomatoes.includes(0);
if (hasUnripetomatoes) {
  console.log(-1);
} else {
  console.log(Math.max(...flattenTomatoes) - 1);
}

function findRipeTomatoLocations() {
  const locations = [];
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      if (tomatoes[i][j] === 1) {
        locations.push([i, j]);
      }
    }
  }
  return locations;
}

function bfs(startLocations) {
  const q = [...startLocations];
  let p = 0;
  while (q.length > p) {
    const cur = q[p];
    p += 1;
    for (let i = 0; i < 4; i += 1) {
      const ny = dy[i] + cur[0];
      const nx = dx[i] + cur[1];
      if (validateRange(ny, nx) && tomatoes[ny][nx] === 0) {
        tomatoes[ny][nx] = tomatoes[cur[0]][cur[1]] + 1;
        q.push([ny, nx]);
      }
    }
  }
}

function validateRange(y, x) {
  return y >= 0 && x >= 0 && y < N && x < M;
}
