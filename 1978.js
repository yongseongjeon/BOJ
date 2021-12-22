const stdin = require("fs").readFileSync("/dev/stdin").toString();
let [N, arr] = stdin
  .trim()
  .split("\n")
  .map((x) => (x.length === 1 ? +x : x.split(" ").map((x) => +x)));
let cnt = 0;
let isPrime = true;
const isPrimeNumber = [];
arr.forEach((x) => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (x === 1) {
    isPrimeNumber.push(false);
  } else {
    isPrimeNumber.push(isPrime);
    isPrime = true;
  }
});

console.log(isPrimeNumber.filter((x) => x).length);
