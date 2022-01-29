const stdin = `6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3
`;

const getFirstLine = (input) => {
  return input.split('\n')[0].split(' ');
};

const getEdges = (input) => {
  return input
    .trim()
    .split('\n')
    .map((x) => x.split(' '))
    .slice(1);
};

const drawGraph = (edges, edgeCnt) => {
  const graph = {};
  Array.from({ length: edgeCnt }).forEach((_, i) => {
    graph[i + 1] = [];
  });
  edges.forEach((edges) => {
    const [edge1, edge2] = edges;
    graph[edge1].push(edge2);
    graph[edge2].push(edge1);
  });
  return graph;
};

const [edgeCnt, vertexCnt] = getFirstLine(stdin);
const connectInfo = getEdges(stdin);
const graph = drawGraph(connectInfo, edgeCnt);

let isVisited = [null, ...Array(+edgeCnt).fill(false)];

const edges = Array(+edgeCnt)
  .fill(0)
  .map((_, i) => i + 1);

let cnt = 0;

const bfs = (startEdge) => {
  if (isVisited[startEdge]) return;
  let queue = [startEdge];
  isVisited[startEdge] = true;
  while (queue.length) {
    let currentEdge = queue.shift();
    graph[currentEdge].forEach((edge) => {
      if (!isVisited[edge]) {
        queue.push(edge);
        isVisited[edge] = true;
      }
    });
  }
  cnt += 1;
};

edges.forEach((edge) => bfs(edge));

console.log(cnt);
