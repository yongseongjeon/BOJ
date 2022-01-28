const stdin = `1000 1 1000
999 1000
`;

// 입력 데이터 가공
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

const [edgeCnt, vertexCnt, edgeNumberToStart] = getFirstLine(stdin);
const edges = getEdges(stdin);

// 그래프 그리기
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

const graph = drawGraph(edges, edgeCnt);

for (let edge in graph) {
  graph[edge].sort((a, b) => a - b);
}

let isVisited = [null, ...Array(+edgeCnt).fill(false)];

let queue = [edgeNumberToStart];
isVisited[edgeNumberToStart] = true;

result = [];

while (queue.length) {
  let currentEdge = queue.shift();
  result.push(currentEdge);
  graph[currentEdge].forEach((edge) => {
    if (!isVisited[edge]) {
      queue.push(edge);
      isVisited[edge] = true;
    }
  });
}

bfsResult = result.join(' ');

isVisited = [null, ...Array(+edgeCnt).fill(false)];

dfsResult = [];

const dfs = (edge) => {
  if (isVisited[edge]) return;
  isVisited[edge] = true;
  dfsResult.push(edge);
  graph[edge].forEach((edge) => {
    if (!isVisited[edge]) {
      dfs(edge);
    }
  });
};

dfs(edgeNumberToStart);

console.log(dfsResult.join(' '));
console.log(bfsResult);
