const stdin = require('fs').readFileSync('/dev/stdin').toString();

const T = stdin.split('\n').shift();
const tc = stdin.trim().split('\n').slice(1);

const testCases = [];
for (let i = 0; i < tc.length; i += 2) {
  const tmp = [tc[i], tc[i + 1].split(' ')];
  testCases.push(tmp);
}

const graph = {};
testCases.forEach((tc) => {
  const [N, permutation] = tc;

  permutation.forEach((p, i) => {
    graph[i + 1] = [p];
  });

  let cnt = 0;
  const isVisited = [null, ...Array(+N).fill(false)];
  permutation.forEach((p) => {
    if (!isVisited[p]) {
      bfs(p, isVisited);
      cnt += 1;
    }
  });
  console.log(cnt);
});

function bfs(startVertex, isVisited) {
  const queue = [startVertex];
  isVisited[startVertex] = true;

  while (queue.length) {
    let cur = queue.shift();
    graph[cur].forEach((vertex) => {
      if (!isVisited[vertex]) {
        queue.push(vertex);
        isVisited[vertex] = true;
      }
    });
  }
}
