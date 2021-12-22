const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = Number(stdin);
let stars = "";
for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    if (j < i) {
      stars += " ";
    } else {
      stars += "*";
    }
  }
  console.log(stars);
  stars = "";
}
