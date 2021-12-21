const stdin = require('fs').readFileSync('/dev/stdin').toString();
const [N, ...input] = stdin
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map((x) => +x))
  .flat();

const DP = [input[0]];

for (let i = 2; i <= N; i++) {
  DP[i - 1] = Math.max(input[i - 1], input[i - 1] + DP[i - 2]);
}

console.log(Math.max(...DP));
