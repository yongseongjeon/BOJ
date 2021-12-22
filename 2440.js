const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
const input = Number(stdin);
let stars = "";

for (let i = 0; i < input; i++) {
  stars += "*";
}

for (let i = 0; i < input; i++) {
  console.log(stars);
  stars = stars.slice(0, stars.length - 1);
}
