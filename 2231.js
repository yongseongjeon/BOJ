const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = Number(input);

const sumDecomposition = (n) => {
  const arr = n.toString().split("");
  let sum = 0;
  arr.forEach((x) => {
    sum += Number(x);
  });
  return sum + Number(n);
};

let n = 0;
let answer = 0;

for (let i = 0; i < input; i++) {
  if (sumDecomposition(i) === input) {
    answer = i;
    break;
  }
}

console.log(answer);
