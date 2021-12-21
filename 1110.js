const stdin = require('fs').readFileSync('/dev/stdin').toString();
const N = +stdin;
let cnt = 0;
let cur = N;
while (true) {
  const A = parseInt(cur / 10);
  const B = cur % 10;
  const C = A + B;
  const D = C % 10;
  cur = +(B + '' + D);
  cnt += 1;
  if (N === cur) {
    console.log(cnt);
    break;
  }
}
