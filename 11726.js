const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = Number(stdin);
const arr = [null, 1, 2];

for (let i = 3; i <= input; i++) {
  arr[i] = (arr[i - 2] % 10007) + (arr[i - 1] % 10007);
}

console.log(arr[input] % 10007);
