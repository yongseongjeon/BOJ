const STDIN = require("fs").readFileSync("/dev/stdin").toString();
const INPUT = STDIN.split("\n");
const N = +INPUT.shift();
const [A, OPERATOR] = INPUT.map((x) => x.split(" ").map(Number));

let max = -Infinity;
let min = Infinity;

const solution = (idx, ans, plus, minus, mul, div) => {
  if (idx === N) {
    if (max < ans) {
      max = ans;
    }
    if (min > ans) {
      min = ans;
    }
    return;
  }
  if (plus) {
    solution(idx + 1, ans + A[idx], plus - 1, minus, mul, div);
  }
  if (minus) {
    solution(idx + 1, ans - A[idx], plus, minus - 1, mul, div);
  }
  if (mul) {
    solution(idx + 1, ans * A[idx], plus, minus, mul - 1, div);
  }
  if (div) {
    if (ans > 0) {
      solution(idx + 1, parseInt(ans / A[idx]), plus, minus, mul, div - 1);
    } else {
      solution(idx + 1, -parseInt(-ans / A[idx]), plus, minus, mul, div - 1);
    }
  }
};

solution(1, A[0], ...OPERATOR);

console.log(`${max}\n${min}`);
