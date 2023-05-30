const customInput = `2 4
1 2
3 4
1 1 1 1
1 2 1 2
2 1 2 1
2 2 2 2
`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const [firstLine, ...rest] = stdin.split('\n');
const [N, M] = firstLine.split(' ').map(Number);
const arr = rest.slice(0, N).map((x) => x.split(' ').map(Number));
const locations = rest.slice(N).map((x) => x.split(' ').map((x) => +x - 1));

const total = [];
arr.map((x) => {
  const tmp = [];
  x.reduce((prev, cur) => {
    const sum = prev + cur;
    tmp.push(sum);
    return sum;
  }, 0);
  total.push(tmp);
});

const sum = locations.map((loca) => {
  const [x1, y1, x2, y2] = loca;
  let result = 0;
  for (let i = x1; i <= x2; i += 1) {
    if (y1 === 0) {
      result += total[i][y2];
    } else {
      result += total[i][y2] - total[i][y1 - 1];
    }
  }
  return result;
});

console.log(sum.join('\n'));
