const stdin = require('fs').readFileSync('/dev/stdin').toString();
const sum = stdin
  .split(' ')
  .map(Number)
  .reduce((acc, val) => acc + val);
console.log(sum);
