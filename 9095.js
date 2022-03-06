// const stdin = require('fs').readFileSync('/dev/stdin').toString();
const stdin = `10
1
2
3
4
5
6
7
8
9
10
`;
const testCases = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => Number(x));
console.log('testCases', testCases);
const dp = [null, 1, 2, 4];

for (let i = 4; i <= 11; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

console.log(dp);

function sumOutput(arr) {
  return arr.reduce((total, tc) => total + `${dp[tc]}\n`, '');
}

const answer = sumOutput(testCases);
// console.log(answer);
