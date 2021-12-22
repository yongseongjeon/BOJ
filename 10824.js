const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [A, B, C, D] = stdin.split(" ");

console.log(Number(A + B) + Number(C + D));
