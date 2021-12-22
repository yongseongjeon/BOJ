let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

const arr = [];
let remainder = 0;

input.forEach((x) => {
  remainder = x % 42;
  if (!arr.includes(remainder)) {
    arr.push(remainder);
  }
});

console.log(arr.length);
