const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [from, to] = stdin.trim().split("\n");
const arr = Array(to - from + 1)
  .fill(from)
  .map((x, i) => +x + i);
let isPrime = true;
const isPrimeNumber = [];
arr.forEach((x) => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (x !== 1 && isPrime) {
    isPrimeNumber.push(x);
  }
  isPrime = true;
});

if (isPrimeNumber.length) {
  console.log(isPrimeNumber.reduce((acc, v) => acc + v));
  console.log(Math.min(...isPrimeNumber));
} else {
  console.log(-1);
}
