const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString();
let input = stdin
  .slice()
  .split(' ')
  .map((x) => Number(x)); // [1, 1]
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const month = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let day = 0;
for (let i = 1; i < input[0]; i++) {
  day += month[i];
}
day += input[1];
console.log(days[day % 7]);
