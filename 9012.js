const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = stdin.slice().map((ps) => ps.split(""));
const inputLen = input.shift();

const isVPS = (ps) => {
  const len = ps.length;
  const stack = [];
  let returnVal = true;
  for (let i = 0; i < len; i++) {
    if (ps[i] === ")") {
      if (stack.pop() === undefined) {
        returnVal = false;
        break;
      }
    } else {
      stack.push(ps[i]);
    }
  }
  if (stack.length) {
    returnVal = false;
  }
  return returnVal;
};

input.forEach((ps) => {
  console.log(isVPS(ps) ? "YES" : "NO");
});
