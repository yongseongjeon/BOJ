const stdin = `10 1 10 2 1`;
let [total, first, target, u, d] = stdin.split(' ').map(Number);
let cnt = 0;

function bfs() {
  const v = Array(total).fill(false);
  const q = [[first, 0]];
  let i = 0;
  while (i < q.length) {
    const [cur, cnt] = q[i];
    i += 1;
    if (cur === target) {
      return cnt;
    }
    let candidates = [
      [cur + u, cnt + 1],
      [cur - d, cnt + 1],
    ];
    candidates = candidates.filter((x) => x[0] > 0 && x[0] <= total);
    candidates.forEach((c) => {
      if (!v[c[0]]) {
        v[c[0]] = true;
        q.push([c[0], c[1]]);
      }
    });
  }
  return 'use the stairs';
}

console.log(bfs());
