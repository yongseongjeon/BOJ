const stdin = require("fs").readFileSync("/dev/stdin").toString();
const input = stdin
  .trim()
  .split("\n")
  .map((x) => Number(x));
const inputLen = input.shift();
const scores = [null, ...input];
const dpTable = [null, scores[1], scores[1] + scores[2]];
dpTable.push(Math.max(dpTable[1] + scores[3], dpTable[2]) + scores[4]);

for (let i = 3; i <= inputLen; i++) {
  dpTable[i] =
    Math.max(dpTable[i - 3] + scores[i - 1], dpTable[i - 2]) + scores[i];
}

console.log(dpTable[inputLen]);
