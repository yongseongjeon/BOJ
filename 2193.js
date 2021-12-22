const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = Number(stdin);
const dpTable = [null, 1, 1];

for (let i = 3; i <= input; i++) {
  dpTable[i] = BigInt(dpTable[i - 2]) + BigInt(dpTable[i - 1]);
}

console.log(dpTable[input].toString());
