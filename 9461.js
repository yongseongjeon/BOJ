const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = stdin
  .trim()
  .split("\n")
  .map((x) => Number(x));
input.shift();
const dpTable = [null, 1, 1, 1, 2, 2];
const max = Math.max(...input);

for (let i = 6; i <= max; i++) {
  dpTable[i] = dpTable[i - 3] + dpTable[i - 2];
}

input.forEach((x) => console.log(dpTable[x]));
