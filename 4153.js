const stdin = require("fs").readFileSync("/dev/stdin").toString();
let input = stdin.trim().split("\n");
input.pop();
input = input.map((x) => x.split(" ").map(Number));
input.forEach((x) => {
  const biggest = Math.max(...x);
  const smallest = Math.min(...x);
  const middle = x.filter((x) => x !== biggest && x !== smallest)[0];
  const isRightTriangle = smallest ** 2 + middle ** 2 === biggest ** 2;
  if (isRightTriangle) {
    console.log("right");
  } else {
    console.log("wrong");
  }
});
