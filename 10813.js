const customInput = `5 4
1 2
3 4
1 4
2 2
`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const [NM, ...rest] = stdin.split('\n');
const [N, M] = NM.split(' ');
const arr = Array.from({ length: N }, (_, i) => i + 1);
rest.forEach((x) => {
  const [i, j] = x.split(' ');
  const tmp = arr[j - 1];
  arr[j - 1] = arr[i - 1];
  arr[i - 1] = tmp;
});
console.log(arr.join(' '));
