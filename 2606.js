const stdin = require("fs").readFileSync("/dev/stdin").toString();
let [N, M, ...input] = stdin.trim().split("\n");
input = input.map((x) => x.split(" ").map((v) => +v));

class Graph {
  constructor() {
    this.nodes = {};
  }
  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }
  hasNode(node) {
    if (this.nodes[node] === undefined) {
      return false;
    }
    return true;
  }
  addEdge(node1, node2) {
    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
  }
}

const g = new Graph();

input.forEach((x) => {
  if (!g.hasNode(x[0] && !g.hasNode(x[1]))) {
    g.addNode(x[0]);
    g.addNode(x[1]);
  }
  g.addEdge(x[0], x[1]);
});

const BFS = (startNode) => {
  const visited = [];
  let needVisit = [startNode];

  while (needVisit.length) {
    let cur = needVisit.shift();
    if (!visited.includes(cur)) {
      visited.push(cur);
      needVisit = [...needVisit, ...g.nodes[cur]];
    }
  }
  return visited;
};

console.log(BFS(1).length - 1);
