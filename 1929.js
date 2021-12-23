const stdin = `1 1`;
const [M, N] = stdin.split(" ").map(Number);

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const arr = Array(N - M + 1)
  .fill(M)
  .map((x, i) => x + i);

console.log(arr.filter(isPrime).join("\n"));
