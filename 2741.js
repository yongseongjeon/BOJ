let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const n = Number(input);
let answer = "";

for (let i = 1; i <= n; i++) {
  if (i === n) {
    answer += i;
  } else {
    answer += `${i}\n`;
  }
}

console.log(answer);
