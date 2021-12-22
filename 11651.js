const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [N, ...input] = stdin
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((v) => +v));
input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let answer = "";
input.forEach((x) => (answer += x.join(" ") + "\n"));
console.log(answer);
