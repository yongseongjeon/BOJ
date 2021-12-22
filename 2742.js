let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const n = Number(input);
let answer = "";

for (let i = n; i >= 1; i--) {
  answer += `${i}\n`;
}

console.log(answer);
