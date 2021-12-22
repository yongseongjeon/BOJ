const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
input.shift();

input.sort((a, b) => a - b);

input.forEach((x) => console.log(x));
