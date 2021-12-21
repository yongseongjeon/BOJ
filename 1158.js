const stdin = require('fs').readFileSync('/dev/stdin').toString();
const [N, K] = stdin.split(' ').map(Number);

const people = Array(N)
  .fill(1)
  .map((x, i) => x + i);
let idx = K - 1;
const answer = [];
while (people.length) {
  answer.push(people.splice(idx, 1));
  idx += K - 1;
  idx %= people.length;
}

console.log(`<${answer.join(', ')}>`);
