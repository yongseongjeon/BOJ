const stdin = `1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 2 1
1 1 1 1 1`;
const map = stdin
  .trim()
  .split('\n')
  .map((x) => x.split(' '));
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];
const possible = [];
for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    bfs(i, j);
  }
}
console.log(possible.length);

function bfs(i, j) {
  const q = [[i, j, '']];
  while (q.length) {
    const cur = q.shift();
    if (cur[2].length === 6) {
      if (!possible.includes(cur[2])) {
        possible.push(cur[2]);
      }
      continue;
    }
    for (let i = 0; i < 4; i += 1) {
      const nx = dx[i] + cur[0];
      const ny = dy[i] + cur[1];
      if (validateRange(nx, ny)) {
        q.push([nx, ny, cur[2] + map[ny][nx]]);
      }
    }
  }
}
function validateRange(x, y) {
  return x >= 0 && y >= 0 && x < 5 && y < 5;
}
