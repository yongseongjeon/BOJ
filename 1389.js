const customInput = `5 5
1 3
1 4
4 5
4 3
3 2
`;
const stdin = getInput();
const [firstLine, ...rest] = stdin
  .split('\n')
  .map((x) => x.split(' ').map(Number));
const [N, M] = firstLine;
const connectInfo = rest.slice();
const nodes = {};
for (let i = 1; i <= N; i += 1) {
  nodes[i] = [];
}
connectInfo.forEach((x) => {
  const [i, j] = x;
  nodes[i].push(j);
  nodes[j].push(i);
});
const results = [];
for (let i = 1; i <= N; i += 1) {
  results.push(bfs(i));
}

const minIdx = findMinIndex(results);
console.log(minIdx + 1);

function findMinIndex(arr) {
  const arrLen = arr.length;
  let min = Infinity;
  let minIdx = null;
  for (let i = arrLen - 1; i >= 0; i -= 1) {
    if (arr[i] <= min) {
      min = arr[i];
      minIdx = i;
    }
  }
  return minIdx;
}

function bfs(node) {
  const v = Array.from({ length: N }).fill(false);
  const q = [[node, 0]];
  v[node] = true;
  let totalLen = 0;
  while (q.length > 0) {
    const [curNode, curLen] = q.shift();
    totalLen += curLen;
    nodes[curNode].forEach((node) => {
      if (!v[node]) {
        q.push([node, curLen + 1]);
        v[node] = true;
      }
    });
  }
  return totalLen;
}

function getInput() {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
}
