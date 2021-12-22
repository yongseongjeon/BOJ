const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [N, M] = stdin.split(" ").map((x) => +x);
const arr = Array(M).fill(0);
const isUsed = Array(N).fill(false);
let answer = "";
const func = (k) => {
  if (k === M) {
    answer += `${arr.join(" ")}\n`;
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!isUsed[i]) {
      arr[k] = i;
      isUsed[i] = 1;
      func(k + 1);
      isUsed[i] = 0;
    }
  }
};

func(0);
console.log(answer);
