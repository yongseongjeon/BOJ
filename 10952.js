let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let answer = "";
let j = 0;

while (true) {
  const [a, b] = input[j].split(" ").map((x) => x / 1);
  if (a + b === 0) {
    break;
  }
  answer += `${a + b}\n`;

  j += 1;
}

console.log(answer);
