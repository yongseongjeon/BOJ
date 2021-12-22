let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

for (let i = 1; i <= input; i++) {
  let star = Array(i)
    .fill("*")
    .reduce((arr, x) => arr + x);
  console.log(star);
}
