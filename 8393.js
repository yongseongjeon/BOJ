let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let totalSum = 0;

for (let i = 1; i <= input; i++) {
  totalSum += i;
}

console.log(totalSum);
