const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [n, k] = stdin.split(" ").map((x) => +x);
const dp = [];
const num = 1000000000;

for (let i = 0; i <= n; i++) {
  dp.push([]);
}

for (let i = 0; i <= n; i++) {
  for (let j = 0; j < k; j++) {
    if (i === 0) {
      dp[i][j] = 1;
    } else if (j === 0) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      dp[i][j] %= num;
    }
  }
}

console.log(dp[n][k - 1] % num);
