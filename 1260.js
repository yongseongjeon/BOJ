const stdin = `1000 1 1000
999 1000
`;

// 입력 데이터 가공
const getFirstLine = (input) => {
  return input.split('\n')[0].split(' ');
};

const getVertexs = (input) => {
  return input
    .trim()
    .split('\n')
    .map((x) => x.split(' '))
    .slice(1);
};

const [vertexCnt, edgeCnt, vertexNumberToStart] = getFirstLine(stdin);
const vertexes = getVertexs(stdin);

// 그래프 그리기
const drawGraph = (vertexes, vertexCnt) => {
  const graph = {};
  Array.from({ length: vertexCnt }).forEach((_, i) => {
    graph[i + 1] = [];
  });
  vertexes.forEach((vertexes) => {
    const [vertex1, vertex2] = vertexes;
    graph[vertex1].push(vertex2);
    graph[vertex2].push(vertex1);
  });
  return graph;
};

const graph = drawGraph(vertexes, vertexCnt);

for (let vertex in graph) {
  graph[vertex].sort((a, b) => a - b);
}

let isVisited = [null, ...Array(+vertexCnt).fill(false)];

let queue = [vertexNumberToStart];
isVisited[vertexNumberToStart] = true;

result = [];

while (queue.length) {
  let currentVertex = queue.shift();
  result.push(currentVertex);
  graph[currentVertex].forEach((vertex) => {
    if (!isVisited[vertex]) {
      queue.push(vertex);
      isVisited[vertex] = true;
    }
  });
}

bfsResult = result.join(' ');

isVisited = [null, ...Array(+vertexCnt).fill(false)];

dfsResult = [];

const dfs = (vertex) => {
  if (isVisited[vertex]) return;
  isVisited[vertex] = true;
  dfsResult.push(vertex);
  graph[vertex].forEach((vertex) => {
    if (!isVisited[vertex]) {
      dfs(vertex);
    }
  });
};

dfs(vertexNumberToStart);

console.log(dfsResult.join(' '));
console.log(bfsResult);
