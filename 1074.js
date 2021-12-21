const stdin = require('fs').readFileSync('/dev/stdin').toString();
const input = stdin.split(' ').map(Number);

const recursive = (n, r, c) => {
  const h = 2 ** (n - 1);
  if (n === 0) {
    return 0;
  }
  if (h > r && h > c) {
    return recursive(n - 1, r, c);
  }
  if (h > r && h <= c) {
    return h * h + recursive(n - 1, r, c - h);
  }
  if (h <= r && h > c) {
    return 2 * h * h + recursive(n - 1, r - h, c);
  }
  return 3 * h * h + recursive(n - 1, r - h, c - h);
};

console.log(recursive(...input));
