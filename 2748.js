const n = +require("fs").readFileSync("/dev/stdin").toString();
const fibonacci = [0, 1];

const solution = (n) => {
  for (let i = 2; i <= n; i += 1) {
    fibonacci[i] = BigInt(fibonacci[i - 2]) + BigInt(fibonacci[i - 1]);
  }

  console.log(fibonacci[n].toString(10));
};

solution(n);
