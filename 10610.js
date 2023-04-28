const stdin = `2931`;

function isMultipleOf3(num) {
  const nums = num.toString().split('').map(Number);
  const total = nums.reduce((prev, cur) => prev + cur);
  return total % 3 === 0;
}

function hasZero(str) {
  return Boolean(~str.indexOf('0'));
}

function solve() {
  if (!isMultipleOf3(stdin) || !hasZero(stdin)) {
    return -1;
  }
  return stdin
    .split('')
    .sort((a, b) => b - a)
    .join('');
}

console.log(solve());
