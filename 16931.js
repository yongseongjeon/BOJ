const stdin = `3 3
1 3 4
2 2 3
1 2 4
`;

const [N, M] = stdin.split('\n')[0].split(' ').map(Number);
const map = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '))
  .map((x) => x.map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let ans = 2 * N * M;

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < M; j += 1) {
    for (let k = 0; k < 4; k += 1) {
      const nx = i + dx[k];
      const ny = j + dy[k];
      if (nx < 0 || ny < 0 || nx > N - 1 || ny > M - 1) {
        ans += map[i][j];
        continue;
      }
      if (map[i][j] > map[nx][ny]) {
        ans += map[i][j] - map[nx][ny];
      }
    }
  }
}

console.log(ans);
