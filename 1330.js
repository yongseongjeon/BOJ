let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
input = input.map((x) => x / 1);
const [a, b] = input;

if (a > b) console.log('>');
if (a < b) console.log('<');
if (a === b) console.log('==');
