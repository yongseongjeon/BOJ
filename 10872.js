const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = Number(input);

const getFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
};

console.log(getFactorial(input));
