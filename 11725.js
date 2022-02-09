const stdin = `12
1 2
1 3
2 4
3 5
3 6
4 7
4 8
5 9
5 10
6 11
6 12
`;

const N = +stdin.split('\n').shift();
const connectInfo = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' ').map(Number));

const nodes = {};

connectInfo.forEach((c) => {
  const [n1, n2] = c;
  nodes[n1] = nodes[n1] || [];
  nodes[n2] = nodes[n2] || [];
  nodes[n1].push(n2);
  nodes[n2].push(n1);
});

const v = [null, ...Array(N).fill(false)];
v[1] = true;
const p = [];

const bfs = (cur) => {
  const q = [cur];
  while (q.length) {
    const cur = q.shift();
    for (let next of nodes[cur]) {
      if (p[cur] === next) continue;
      p[next] = cur;
      q.push(next);
    }
  }
};

bfs(1);
console.log(p.filter(Number).join('\n'));
