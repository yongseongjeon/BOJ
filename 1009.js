const stdin = `5
1 1
1 1000000
100 1
100 1000000
654 456
`;

let [testCaseNum, ...input] = stdin.trim().split('\n');
input = input.map((x) => x.split(' ').map(Number));
const answer = [];
const COMPUTER_NUMBER = 10;

input.forEach((x) => {
  let [base, exponent] = x;
  let value = 1;
  while (exponent) {
    value = value * base;
    value = value % COMPUTER_NUMBER;
    exponent -= 1;
  }
  answer.push(value);
});

const zeroToTen = (x) => {
  if (x === 0) {
    return 10;
  }
  return x;
};

console.log(answer.map(zeroToTen).join('\n'));
