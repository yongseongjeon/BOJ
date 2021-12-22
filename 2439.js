let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString() / 1;

for (let i = 1; i <= input; i++) {
  let star = Array(input)
    .fill("*")
    .fill(" ", 0, input - i)
    .reduce((arr, val) => arr + val);
  console.log(star);
}
