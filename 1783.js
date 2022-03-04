const stdin = `2 2`;
const [N, M] = stdin.split(' ').map(Number);

function solve() {
  if (N === 1) {
    return 1;
  }
  if (N === 2) {
    return Math.min(4, Math.floor((M - 1) / 2) + 1);
  }
  if (M >= 7) {
    return M - 2;
  }
  return Math.min(4, M);
}

console.log(solve());
