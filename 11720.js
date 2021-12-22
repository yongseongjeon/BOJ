let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = input[1]
  .split("")
  .map((x) => Number(x))
  .reduce((acc, num) => acc + num);

console.log(answer);
