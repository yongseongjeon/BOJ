const stdin = require("fs").readFileSync("/dev/stdin").toString();
let [N, A] = stdin.trim().split("\n");
N = +N;
A = A.split(" ").map((x) => +x);
const dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[i] <= dp[j]) {
      dp[i] = dp[j] + 1;
    }
  }
}

console.log(Math.max(...dp));
