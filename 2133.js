const stdin = +require("fs").readFileSync("/dev/stdin").toString();
const dp = [1, 0, 3, ...Array(27).fill(0)];

for (let i = 4; i <= stdin; i += 2) {
  dp[i] = dp[i - 2] * 3;
  for (let j = i - 4; j >= 0; j -= 2) {
    dp[i] += dp[j] * 2;
  }
}

console.log(dp[stdin]);
