const stdin = `9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6
`;

const [n, p, m, ...rest] = stdin.trim().split('\n');
const r = rest.map((x) => x.split(' ').map((x) => +x));
const [f1, f2] = p.split(' ');
const adjList = Array.from({ length: n }, () => []);

r.forEach((x) => {
  const [v1, v2] = x;
  adjList[v1 - 1].push(v2);
  adjList[v2 - 1].push(v1);
});

const res = bfs();
console.log(res);

function bfs() {
  const v = Array.from({ length: n }, () => false);
  const startNode = [f1, 0];
  const q = [startNode];
  while (q.length) {
    const [n, depth] = q.shift();
    if (n == f2) {
      return depth;
    }
    const c = adjList[n - 1]
      .map((x) => {
        return [x, depth + 1];
      })
      .filter((x) => {
        return !v[x[0] - 1];
      })
      .map((x) => {
        v[x[0] - 1] = true;
        return x;
      });
    q.push(...c);
  }
  return -1;
}
