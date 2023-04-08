// const stdin = require('fs').readFileSync('/dev/stdin').toString();
const stdin = `3
2 2 1
2 2 2
1 2 -1`;

const [N, ...rest] = stdin.split('\n');
const map = rest.map((x) => x.split(' ').map((x) => x / 1));
const isVisited = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);

function bfs() {
  const q = [[0, 0]];
  isVisited[0][0] = true;

  while (q.length) {
    const cur = q.shift();
    const hasArrived = cur[0] === N - 1 && cur[1] === N - 1;
    if (hasArrived) {
      return true;
    }
    const moveNum = map[cur[0]][cur[1]];
    const moves = [
      [0, moveNum],
      [moveNum, 0],
    ];
    const candidates = moves
      .map((move) => {
        const dy = cur[0] + move[0];
        const dx = cur[1] + move[1];
        return [dy, dx];
      })
      .filter((c) => {
        return validateRange(c[0], c[1], N) && !isVisited[c[0]][c[1]];
      });

    candidates.forEach((c) => {
      isVisited[c[0]][c[1]] = true;
    });
    q.push(...candidates);
  }
  return false;
}

function validateRange(x, y, N) {
  return x >= 0 && y >= 0 && x < N && y < N;
}

console.log(bfs() ? 'HaruHaru' : 'Hing');
