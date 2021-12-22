const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = stdin
  .slice()
  .trim()
  .split("\n")
  .map((x) => Number(x));

console.log(input[0] + input[1]);
