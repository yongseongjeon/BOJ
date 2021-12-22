const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [A, B, V] = stdin.split(" ").map((x) => +x);
const loca = V - A;
const movement = A - B;
const days =
  loca % movement === 0 ? loca / movement + 1 : Math.floor(loca / movement) + 2;

console.log(days);
