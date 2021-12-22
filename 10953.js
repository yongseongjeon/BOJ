const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = stdin.slice().trim().split("\n");
input.shift();
input = input.map((x) => x.split(",")).map((x) => x.map((x) => Number(x)));

input.forEach((x) => {
  console.log(x[0] + x[1]);
});
