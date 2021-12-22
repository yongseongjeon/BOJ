const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [N, ...input] = stdin
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((v, i) => (i === 0 ? v : +v)));

input.sort((a, b) => {
  const isEqualAllScores = a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  const isEqualKorEng = a[1] === b[1] && a[2] === b[2];
  const isEqualKor = a[1] === b[1];
  if (isEqualAllScores) {
    return a[0] > b[0] ? 1 : -1;
  }
  if (isEqualKorEng) {
    return b[3] - a[3];
  }
  if (isEqualKor) {
    return a[2] - b[2];
  }
  return b[1] - a[1];
});

let answer = "";

input.forEach((x) => (answer += x[0] + "\n"));

console.log(answer);
