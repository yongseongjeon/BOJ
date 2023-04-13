const stdin = `3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1`;
const [testCaseNum, ...rest] = stdin.trim().split('\n');
const dx = [1, 2, 2, 1, -1, -2, -2, -1];
const dy = [2, 1, -1, -2, -2, -1, 1, 2];
for (let n = 0; n < testCaseNum; n += 1) {
  const l = +rest.shift();
  const cur = rest
    .shift()
    .split(' ')
    .map((x) => +x);
  const target = rest
    .shift()
    .split(' ')
    .map((x) => +x);
  const v = Array.from({ length: l }, () =>
    Array.from({ length: l }, () => false)
  );
  const depth = bfs([...cur, 0], target);
  console.log(depth);

  function bfs(start, target) {
    const q = [start];
    let i = 0;
    while (q.length) {
      if (i > 100000) break;
      i += 1;
      const cur = q.shift();

      if (cur[0] === target[0] && cur[1] === target[1]) {
        return cur[2];
      }
      for (let i = 0; i < 8; i += 1) {
        const nx = dx[i] + cur[0];
        const ny = dy[i] + cur[1];
        if (validateRange(nx, ny, l) && !v[ny][nx]) {
          q.push([nx, ny, cur[2] + 1]);
          v[ny][nx] = true;
        }
      }
    }
  }
}
function validateRange(x, y, len) {
  return x >= 0 && y >= 0 && x < len && y < len;
}
