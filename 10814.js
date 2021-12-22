const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [N, ...input] = stdin
  .trim()
  .split("\n")
  .map((x) => x.split(" "));
const info = input.map((x, i) => {
  return {
    Age: x[0] / 1,
    Name: x[1],
    Index: i,
  };
});

info.sort((a, b) => {
  if (a.Age === b.Age) {
    return a.Index - b.Index;
  }
  return a.Age - b.Age;
});

let answer = "";
info.forEach((x) => {
  answer += `${x.Age} ${x.Name}\n`;
});

console.log(answer);
