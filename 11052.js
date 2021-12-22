const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [N, A] = stdin
  .trim()
  .split("\n")
  .map((x) => (x.length === 1 ? x : x.split(" ").map((x) => +x)));
A.unshift(null);
const dp = [0, A[1]];

for (let i = 2; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i] || 0, dp[i - j] + A[j]);
  }
}

console.log(dp[N]);
