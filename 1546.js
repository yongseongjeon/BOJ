let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const len = input[0];
const arr = input[1].split(' ').map((x) => Number(x));

const largestNum = Math.max(...arr);
const conversionArr = [];

arr.forEach((x) => {
  const conversionScore = (x / largestNum) * 100;
  conversionArr.push(conversionScore);
});

const totalSum = conversionArr.reduce((acc, x) => acc + x);

console.log(totalSum / len);
