const stdin = require("fs").readFileSync("/dev/stdin").toString();
const input = stdin.trim().split("\n");
const testCaseNum = +input.shift();
const testCases = input.map((x) => x.split(" ").slice(1).map(Number));

const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

let answer = "";
let total = 0;

testCases.forEach((tc) => {
  for (let i = 0; i < tc.length - 1; i++) {
    for (let j = i + 1; j < tc.length; j++) {
      total += getGCD(tc[i], tc[j]);
    }
  }
  answer += `${total}\n`;
  total = 0;
});

console.log(answer);
