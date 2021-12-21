const getParent = (parent, x) => {
  if (parent[x] === x) {
    return x;
  }
  return (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, a, b) => {
  c = getParent(parent, a);
  d = getParent(parent, b);
  if (c < d) {
    parent[d] = c;
  } else {
    parent[c] = d;
  }
};

const find = (parent, a, b) => {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if (a === b) {
    return true;
  }
  return false;
};

class Edge {
  constructor() {
    this.edges = [];
  }

  edge(from, to, distance) {
    this.edges.push({
      node: [from, to],
      distance,
    });
  }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString();
let input = stdin.trim().split('\n');
const [V, E] = input.shift().split(' ').map(Number);
input = input.map((x) => x.split(' ').map(Number));

const g = new Edge();
input.map((x) => {
  g.edge(...x);
});

g.edges.sort((a, b) => {
  return a.distance - b.distance;
});

const arr = [
  null,
  ...Array(V)
    .fill(0)
    .map((_, i) => i + 1),
];

let total = 0;
g.edges.map((x) => {
  if (!find(arr, x.node[0], x.node[1])) {
    total += x.distance;
    unionParent(arr, x.node[0], x.node[1]);
  }
});

console.log(total);
