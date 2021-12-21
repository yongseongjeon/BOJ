const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString();
let input = Number(stdin);
const dpTable = [null, 1, 2];

for (let i = 3; i <= input; i++) {
  const cur = dpTable[i - 2] + dpTable[i - 1];
  dpTable[i] = cur % 15746;
}

console.log(dpTable[input]);
