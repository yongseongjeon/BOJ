const stdin = `3 3 2 1
1 2 3 0
4 5 6 0
7 9 11 3
0 4 5 6
0 7 8 9
`;

const [H, W, X, Y] = stdin.split('\n')[0].split(' ').map(Number);
const B = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '))
  .map((x) => x.map(Number));

const A = Array.from(Array(H), () => Array(W).fill(null));

for (let i = 0; i < H; i += 1) {
  for (let j = 0; j < W; j += 1) {
    const isNotOverlap = i - X < 0 || j - Y < 0;
    if (isNotOverlap) {
      A[i][j] = B[i][j];
      continue;
    }
    A[i][j] = B[i][j] - A[i - X][j - Y];
  }
}

const answer = A.reduce((prev, cur) => prev + cur.join(' ') + '\n', '');
console.log(answer);
