const stdin = `5 17`;

const [N, K] = stdin.split(' ').map(Number);

console.log(bfs());

function bfs() {
  const q = [[N, 0]];
  const v = Array.from({ length: 100000 }, () => false);
  while (q.length) {
    const [n, depth] = q.shift();
    if (n === K) {
      return depth;
    }
    const candidates = [
      [n - 1, depth + 1],
      [n + 1, depth + 1],
      [n * 2, depth + 1],
    ]
      .filter((x) => validateRange(x[0]) && !v[x[0]])
      .map((x) => {
        v[x[0]] = true;
        return x;
      });
    q.push(...candidates);
  }
}
function validateRange(x) {
  return x >= 0 && x <= 100000;
}
