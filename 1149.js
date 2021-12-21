const stdin = require('fs').readFileSync('/dev/stdin').toString();
let [N, ...c] = stdin.trim().split('\n');
c = c.map((x) => x.split(' ').map((v) => +v));

const solution = () => {
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        c[i][j] += Math.min(c[i - 1][j + 1], c[i - 1][j + 2]);
      } else if (j === 1) {
        c[i][j] += Math.min(c[i - 1][j - 1], c[i - 1][j + 1]);
      } else {
        c[i][j] += Math.min(c[i - 1][j - 2], c[i - 1][j - 1]);
      }
    }
  }
  return Math.min(...c[c.length - 1]);
};

console.log(solution());
