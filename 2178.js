const stdin = `7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111
`;

const [N, M] = stdin.split('\n').shift().split(' ').map(Number);

const maze = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(''));

const isVisited = [...Array(N)].map(() => Array(M).fill(false));
const q = [[0, 0, 1]];

while (q.length) {
  let [i, j, k] = q.shift();

  if (i < 0 || j < 0 || i >= N || j >= M) continue;
  if (isVisited[i][j]) continue;
  if (maze[i][j] === '0') continue;

  isVisited[i][j] = true;
  maze[i][j] = k;

  q.push([i - 1, j, k + 1]);
  q.push([i + 1, j, k + 1]);
  q.push([i, j - 1, k + 1]);
  q.push([i, j + 1, k + 1]);
}

console.log(maze[N - 1][M - 1]);
