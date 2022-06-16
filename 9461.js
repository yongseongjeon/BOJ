const stdin = require('fs').readFileSync('/dev/stdin').toString();
const T = stdin.trim().split('\n').slice(1).map(Number);
const dp = [null, 1, 1, 1, 2, 2];
for (let i = 6; i <= 100; i += 1) {
  dp[i] = dp[i - 5] + dp[i - 1];
}
const answer = T.reduce((prev, cur) => prev + dp[cur] + '\n', '');
console.log(answer);
