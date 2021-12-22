const stdin = require("fs").readFileSync("/dev/stdin").toString();
let [NK, ...A] = stdin.trim().split("\n");
const [N, K] = NK.split(" ").map((x) => +x);
A = A.map((x) => x.split(" ").map((x) => +x)).flat();

A.sort((a, b) => {
  return a - b;
});

console.log(A[K - 1]);
