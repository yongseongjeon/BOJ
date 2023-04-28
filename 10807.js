const stdin = `11
1 4 1 2 4 2 4 2 3 4 4
5
`;

const [N, INT, target] = stdin.trim().split('\n');
const arr = INT.split(' ');
const targetNum = arr.reduce((prev, cur) => {
  if (cur === target) {
    return prev + 1;
  }
  return prev;
}, 0);

console.log(targetNum);
