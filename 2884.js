let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
input = input.map((x) => x / 1);
const [a, b] = input;

if (b >= 45) {
  console.log(a + " " + (b - 45));
} else if (a > 0) {
  console.log(a - 1 + " " + (b + 15));
} else {
  console.log("23" + " " + (b + 15));
}
