const stdin = `6 2
0 1
0 1
0 1
0 1
0 1
0 1
`;

const [N, K] = stdin.trim().split('\n')[0].split(' ').map(Number);
const arr = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' ').map(Number));

let arr2 = [];

arr.forEach((x) => {
  const [gender, grade] = x;
  if (gender === 0) {
    arr2[grade] = (arr2[grade] || 0) + 1;
  } else {
    arr2[grade + 6] = (arr2[grade + 6] || 0) + 1;
  }
});

arr2 = arr2.filter((x) => x);

const answer = arr2
  .filter((x) => x)
  .reduce((prev, cur) => {
    const q = Math.floor(cur / K);
    if (Math.floor(cur / K) === cur / K) {
      return prev + q;
    }
    return prev + q + 1;
  }, 0);

console.log(answer);
