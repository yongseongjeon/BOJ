const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = stdin.slice();
input = input.filter((x, i) => input.indexOf(x) === i);
const inputLen = input.shift();

input.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

input.forEach((x) => console.log(x));
