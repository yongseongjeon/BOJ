const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString();
let input = Number(stdin);
let squareNum = 0;
const dpTable = [null, 1, 2];

for (let i = 1; i <= input; i++) {
  dpTable[i] = i;
  for (let j = 1; j <= i; j++) {
    if (j * j <= i) {
      dpTable[i] = Math.min(dpTable[i], dpTable[i - j * j] + 1);
    }
  }
}

console.log(dpTable[input]);
