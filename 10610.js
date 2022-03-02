const stdin = `1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890`;

function isMultipleOf3(num) {
  if (num === 0) return false;
  return num.split('').reduce((acc, x) => acc + +x, 0) % 3 === 0;
}

function isExistZero(num) {
  return num.split('').some((x) => x === '0');
}

function solve() {
  if (!isMultipleOf3(stdin) || !isExistZero(stdin)) {
    return -1;
  }
  return stdin
    .split('')
    .sort((a, b) => b - a)
    .join('');
}

console.log(solve());
