const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = Number(stdin);
const arr = [null, 1, 3];

for (let i = 3; i <= input; i++) {
  const cur = arr[i - 2] * 2 + arr[i - 1];
  arr[i] = cur % 10007;
}

console.log(arr[input]);
