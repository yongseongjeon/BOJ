const stdin = `3 7`;
const [N, M] = stdin.split(' ').map(Number);

function solve() {
  if (N === 1) {
    return 1;
  }
  if (N === 2) {
    return Math.min(4, (M - 1) / 2 + 1);
  }
  if (M >= 7) {
    return M - 2;
  }
  return Math.min(4, M);
}

console.log(solve());
