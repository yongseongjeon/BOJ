let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((x) => Number(x));

const arr = input;
const len = arr.length;
let largestNum = arr[0];
let n = 1;

for (let i = 0; i < len; i++) {
  if (largestNum < arr[i]) {
    largestNum = arr[i];
    n = i + 1;
  }
}

console.log(largestNum);
console.log(n);
