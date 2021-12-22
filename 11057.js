const stdin = require("fs").readFileSync("/dev/stdin").toString();
const dp = [null, Array(10).fill(1)];

for (let i = 1; i < stdin; i++) {
  dp.push(Array(10).fill(0));
}

for (let i = 2; i <= stdin; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = j; k >= 0; k--) {
      dp[i][j] += dp[i - 1][k] % 10007;
    }
  }
}

console.log(dp[dp.length - 1].reduce((acc, val) => acc + val) % 10007);
