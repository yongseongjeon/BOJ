const stdin = require("fs").readFileSync("/dev/stdin").toString();
let N = +stdin;

const solution = (N) => {
  let cnt = 0;
  while (N > 0) {
    if (N % 5 === 0) {
      cnt += N / 5;
      break;
    }
    N -= 3;
    cnt += 1;
  }
  return N < 0 ? -1 : cnt;
};

console.log(solution(N));
