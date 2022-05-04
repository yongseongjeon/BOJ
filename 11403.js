const stdin = `3
0 1 0
0 0 1
1 0 0
`;

const [n, ...arr] = stdin.trim().split('\n');
const matrix = arr.map((x) => x.split(' ').map(Number));
const nodes = Array(+n)
  .fill(0)
  .map(() => []);

addPath();

function addPath() {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (matrix[i][j] === 1) {
        nodes[i].push(j);
      }
    }
  }
}

function dfs(node, target) {
  const stack = [node];
  const v = Array(+n).fill(false);
  let depth = 0;
  while (stack.length) {
    const cur = stack.pop();
    if (cur === target && depth) {
      return true;
    }
    if (!v[cur]) {
      stack.push(...nodes[cur]);
      v[cur] = true;
    }
    depth += 1;
  }
  return false;
}

const ans = Array(+n)
  .fill(0)
  .map(() => Array(+n).fill(0));

debugger;
for (let i = 0; i < +n; i += 1) {
  for (let j = 0; j < +n; j += 1) {
    if (dfs(i, j)) {
      ans[i][j] = 1;
    }
  }
}

const answer = ans.map((x) => x.join(' ')).join('\n');
console.log(answer);
