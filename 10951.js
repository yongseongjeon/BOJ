let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
let j = 0;
const len = input.length;

while (true) {
  if (j >= len) {
    break;
  }
  const [a, b] = input[j].split(" ").map((x) => x / 1);
  answer += `${a + b}\n`;
  j += 1;
}

console.log(answer);
