const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = stdin
  .trim()
  .split("\n")
  .map((x) => Number(x));
input.shift();
const arr = [null, 1, 2, 4];

for (let i = 4; i <= 11; i++) {
  arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
}

input.forEach((x) => {
  console.log(arr[x]);
});
