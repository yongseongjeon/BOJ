const stdin = require('fs').readFileSync('/dev/stdin').toString().trim();
const [testCaseNum, ...rest] = stdin.split('\n');
for (let i = 0; i < testCaseNum; i += 1) {
  const [M, N, K] = rest
    .shift()
    .split(' ')
    .map((x) => +x);
  const map = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );
  const v = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  Array.from({ length: K }).forEach(() => {
    const cur = rest.shift().split(' ');
    const [x, y] = cur;
    map[y][x] = 1;
  });
  let cnt = 0;
  for (let n = 0; n < N; n += 1) {
    for (let m = 0; m < M; m += 1) {
      if (!v[n][m] && map[n][m] === 1) {
        dfs([m, n]);
        cnt += 1;
      }
    }
  }
  console.log(cnt);

  function dfs(startNode) {
    const s = [startNode];
    v[startNode[1]][startNode[0]] = true;
    const moves = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];
    while (s.length) {
      const [x, y] = s.pop();
      const candidates = moves
        .map((move) => {
          const dy = y + move[1];
          const dx = x + move[0];
          if (validateRange(dx, dy) && !v[dy][dx] && map[dy][dx] === 1) {
            v[dy][dx] = true;
            return [dx, dy];
          }
          return null;
        })
        .filter((x) => x);
      s.push(...candidates);
    }
  }
  function validateRange(x, y) {
    return x >= 0 && y >= 0 && x < M && y < N;
  }
}
