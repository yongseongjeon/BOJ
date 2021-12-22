const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = Number(input);

const getFibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }
  return getFibonacci(n - 2) + getFibonacci(n - 1);
};

console.log(getFibonacci(input));
