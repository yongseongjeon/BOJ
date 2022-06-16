const stdin = require('fs').readFileSync('/dev/stdin').toString();
const numbers = stdin.trim().slice(2).split('\n');
const cnt = {};
numbers.forEach((n) => {
  cnt[n] = cnt[n] + 1 || 1;
});

const arr = [];
Object.keys(cnt).forEach((key) => {
  arr.push([key, cnt[key]]);
});

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return Number(BigInt(a[0]) - BigInt(b[0]));
  }
  return b[1] - a[1];
});

console.log(arr[0][0]);
