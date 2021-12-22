const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = stdin.slice().split("\n");

input.forEach((x) => console.log(x));
