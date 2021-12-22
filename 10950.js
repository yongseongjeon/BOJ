let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = input[0];

for (let i = 1; i <= n; i++) {
  console.log(input[i][0] / 1 + input[i][2] / 1);
}
