const stdin = require("fs").readFileSync("/dev/stdin").toString();
const input = stdin.trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const S = input.map(Number);
const sLen = S.length;

let st = 0;
let end = 0;
let min = Infinity;

S.sort((a, b) => a - b);

while (end < sLen) {
  if (st === end) {
    end += 1;
    continue;
  }
  if (S[end] - S[st] >= M) {
    min = Math.min(min, S[end] - S[st]);
    st += 1;
    continue;
  }
  if (S[end] - S[st] < M) {
    end += 1;
  }
}

if (sLen === 1) {
  console.log(0);
} else {
  console.log(min);
}
