const customInput = `5 3
5 4 3 2 1
1 3
2 4
5 5
`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const [first, second, ...rest] = stdin.split('\n');
const [N, M] = first.split(' ').map(Number);
const arr = second.split(' ').map(Number);
const sections = rest.map((x) => x.split(' ').map(Number));
const total = [];
arr.reduce((prev, cur) => {
  const sum = prev + cur;
  total.push(sum);
  return sum;
}, 0);
const results = sections.map((section) => {
  const [i, j] = section;
  if (i === 1) return total[j - 1];
  if (i === j) return arr[j - 1];
  return total[j - 1] - total[i - 2];
});
console.log(results.join('\n'));
