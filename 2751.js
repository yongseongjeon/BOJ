const stdin = require("fs").readFileSync("/dev/stdin").toString();
let input = stdin
  .trim()
  .split("\n")
  .map((x) => +x);
input.shift();
input.sort((a, b) => a - b);
let answer = "";
input.forEach((x) => {
  answer += `${x}\n`;
});

console.log(answer);
