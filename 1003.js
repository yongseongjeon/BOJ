const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString();
let input = stdin
  .slice()
  .trim()
  .split('\n')
  .map((x) => Number(x));
const inputLen = input.shift();
const arr = [
  [1, 0],
  [0, 1],
];

for (let i = 2; i <= 40; i++) {
  arr[i] = [arr[i - 2][0] + arr[i - 1][0], arr[i - 2][1] + arr[i - 1][1]];
}

input.forEach((x) => {
  console.log(`${arr[x][0]} ${arr[x][1]}`);
});
