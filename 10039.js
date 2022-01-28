const stdin = require("fs").readFileSync("/dev/stdin").toString();
const input = stdin.trim().split("\n").map(Number);
console.log(
  input.reduce((total, score) => {
    if (score < 40) {
      return total + 40;
    }
    return total + score;
  }, 0) / input.length
);
