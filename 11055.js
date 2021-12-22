const stdin = require("fs").readFileSync("/dev/stdin").toString();
let [N, A] = stdin.trim().split("\n");
N = +N;
A = A.split(" ").map((x) => +x);
const dp = [];
A.forEach((x, i) => {
  dp[i] = x;
});

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[i] <= dp[j] + A[i]) {
      dp[i] = dp[j] + A[i];
    }
  }
}

console.log(Math.max(...dp));
