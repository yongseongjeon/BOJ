const stdin = require("fs").readFileSync("/dev/stdin").toString();
let n = +stdin;
let count = 0;
while (n) {
  n = Math.floor(n / 5);
  count += n;
}
console.log(count);
