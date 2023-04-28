const stdin = `7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111
`;

const [NM, ...rest] = stdin.trim().split('\n');
const [N, M] = NM.split(' ').map(Number);
const puzzle = rest.map((x) => x.split(''));
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function bfs() {
  const start = [0, 0, 1];
  const q = [start];
  const v = Array(+N)
    .fill(0)
    .map(() => Array(+M).fill(false));

  while (q.length) {
    const cur = q.shift();
    const [y, x, k] = cur;

    if (y === N - 1 && x === M - 1) return k;
    if (y >= N || y < 0 || x >= M || x < 0) continue;
    if (puzzle[y][x] === '0') continue;
    if (v[y][x]) continue;

    v[y][x] = true;

    for (let i = 0; i <= 3; i += 1) {
      const my = y + dy[i];
      const mx = x + dx[i];
      q.push([my, mx, k + 1]);
    }
  }
}

console.log(bfs());
