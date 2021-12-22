const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = Number(stdin);
let stars = "";

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input * 2 - 1; j++) {
    const from = input - i - 1;
    const to = input + i - 1;
    if (from > j) {
      stars += " ";
    } else if (to < j) {
    } else {
      stars += "*";
    }
  }
  console.log(stars);
  stars = "";
}
