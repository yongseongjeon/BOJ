let stdin = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10
`;

stdin = stdin.trim().split('\n');
const [N, M] = [+stdin[0], +stdin[2]];
const numbers = stdin[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const cards = stdin[3].split(' ').map(Number);

function isExist(n) {
  let start = 0;
  let end = N - 1;
  let mid = getMiddle(start, end);

  while (start <= end) {
    const cur = numbers[mid];
    if (cur > n) {
      end = mid - 1;
    }
    if (cur <= n) {
      start = mid + 1;
    }
    mid = getMiddle(start, end);
  }
  return numbers[mid] === n;
}

function getMiddle(num1, num2) {
  return Math.floor((num1 + num2) / 2);
}

const answer = cards
  .map((n) => {
    if (isExist(n)) {
      return '1';
    }
    return '0';
  })
  .join(' ');

console.log('answer', answer);
