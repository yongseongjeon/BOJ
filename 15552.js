const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = stdin.slice();
const inputLen = input.shift();
input = input.map((x) => x.split(" ")).map((x) => x.map((x) => Number(x)));

let str = "";

input.forEach((x) => {
  str += `${x[0] + x[1]}\n`;
});

console.log(str);
