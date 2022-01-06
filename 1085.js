const stdin = require('fs').readFileSync('/dev/stdin').toString();
const [x, y, w, h] = stdin.split(' ').map(Number);

const distRight = w - x;
const distTop = h - y;

console.log(Math.min(x, y, distRight, distTop));
