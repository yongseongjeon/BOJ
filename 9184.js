const stdin = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "))
  .map((x) => x.map((v) => +v));

const dpTable = [[[]]];
for (let i = 0; i <= 20; i++) {
  dpTable[i] = [];
  for (let j = 0; j <= 20; j++) {
    dpTable[i][j] = [];
    for (let k = 0; k <= 20; k++) {
      dpTable[i][j][k] = null;
    }
  }
}

const w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }
  if (a > 20 || b > 20 || c > 20) {
    dpTable[20][20][20] = dpTable[20][20][20] || w(20, 20, 20);
    return dpTable[20][20][20];
  }
  if (dpTable[a][b][c]) {
    return dpTable[a][b][c];
  }
  if (a < b && b < c) {
    dpTable[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return dpTable[a][b][c];
  }
  dpTable[a][b][c] =
    w(a - 1, b, c) +
    w(a - 1, b - 1, c) +
    w(a - 1, b, c - 1) -
    w(a - 1, b - 1, c - 1);
  return dpTable[a][b][c];
};

stdin.forEach((x) => {
  const isLastInput = x[0] === -1 && x[1] === -1 && x[2] === -1;
  if (!isLastInput) {
    console.log(`w(${x[0]}, ${x[1]}, ${x[2]}) = ${w(...x)}`);
  }
});
