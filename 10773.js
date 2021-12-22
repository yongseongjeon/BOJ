const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = stdin.slice().map((x) => Number(x));
const inputLen = input.shift();
const stack = [];

input.forEach((money) => {
  if (money === 0) {
    stack.pop();
  } else {
    stack.push(money);
  }
});

const sumOfStack = () => stack.reduce((acc, num) => acc + num);

if (!stack.length) {
  console.log("0");
} else {
  console.log(sumOfStack());
}
