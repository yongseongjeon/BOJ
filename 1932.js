const stdin = require("fs").readFileSync("/dev/stdin").toString();
let [inputLen, ...triangle] = stdin.trim().split("\n");
triangle = triangle.map((v) => v.split(" ").map((v) => +v));
const dpTable = [[triangle[0][0]]];

const solution = () => {
  for (let i = 1; i < inputLen; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if (i === j) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }
  return Math.max(...triangle[triangle.length - 1]);
};

console.log(solution());
