let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let answer = "";

for (let i = 1; i <= n; i++) {
  answer += `Case #${i}: ${input[i][0]} + ${input[i][2]} = ${
    input[i][0] / 1 + input[i][2] / 1
  }\n`;
}

console.log(answer);
