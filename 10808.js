const stdin = require("fs").readFileSync("/dev/stdin").toString();
const alphaCnt = Array(26).fill(0);
const input = stdin.split("");

input.forEach((x) => {
  alphaCnt[x.charCodeAt() - 97] += 1;
});

console.log(...alphaCnt);
