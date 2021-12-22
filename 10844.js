let stdin = require("fs").readFileSync("/dev/stdin").toString();
let dp = [null, [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

for (let i = 0; i < stdin - 1; i++) {
  dp.push(Array(10).fill(-1));
}

for (let i = 2; i <= stdin; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j + 1];
      dp[i][j] = dp[i][j] % 1000000000;
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][j - 1];
      dp[i][j] = dp[i][j] % 1000000000;
    } else {
      dp[i][j] = dp[i - 1][j + 1] + dp[i - 1][j - 1];
      dp[i][j] = dp[i][j] % 1000000000;
    }
  }
}

console.log(dp[+stdin].reduce((acc, v) => acc + v) % 1000000000);
