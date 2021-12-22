let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x))
  .reduce((arr, val) => arr * val)
  .toString()
  .split("");

const arr = Array(10).fill(0);

input.forEach((x) => (arr[x] += 1));

arr.forEach((x) => console.log(x));
