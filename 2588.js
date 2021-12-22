let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [a, b] = input;
for (let i = 2; i >= 0; i--) {
  let first = ((a[0] + "00") / 1) * b[i];
  let second = ((a[1] + "0") / 1) * b[i];
  let third = (a[2] / 1) * b[i];
  console.log(first + second + third);
}
console.log(a * b);
