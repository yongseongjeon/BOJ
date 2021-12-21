const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString();
let n = Number(stdin);
const dp = [null, 0];

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[n]);
