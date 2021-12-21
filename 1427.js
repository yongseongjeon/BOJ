const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString();
const input = stdin.slice().split('');

const answer = input.sort((a, b) => b - a).join('');

console.log(answer);
