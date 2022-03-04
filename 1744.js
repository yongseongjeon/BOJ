const stdin = `3
2
3
4
`;
let S = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
const minus = S.filter((x) => x < 0).sort((a, b) => b - a);
const zero = S.filter((x) => x === 0);
const one = S.filter((x) => x === 1);
const plus = S.filter((x) => x > 0 && x !== 1);

function solve() {
  let total = 0;
  total += popAndSum(minus);
  if (!zero.length) {
    total += sum(minus);
  }
  total += popAndSum(plus);
  if (plus.length) {
    total += sum(plus);
  }
  total += sum(one);
  return total;
}

console.log(solve());

function sum(arr) {
  return arr.reduce((acc, x) => acc + x, 0);
}

function popAndSum(arr) {
  let sum = 0;
  while (arr.length >= 2) {
    sum += arr.pop() * arr.pop();
  }
  return sum;
}
