const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
let input = stdin.slice().trim().split("\n");

input.forEach((x) => console.log(x));
