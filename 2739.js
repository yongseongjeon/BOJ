let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
input = input.map((x) => x / 1);

for (let i = 1; i <= 9; i++) {
  console.log(input + " * " + i + " = " + input * i);
}
