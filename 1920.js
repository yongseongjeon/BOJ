const getInput = () => {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
};
const customInput = `1
1 2 3
2
1 2
`;
const stdin = getInput();
const [N, A, M, B] = stdin.split('\n');
const arr = A.split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const numbersToFind = B.split(' ').map(Number);

const isIncludes = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (middle >= start && middle <= end) {
    const cur = arr[middle];
    if (target === cur) {
      return true;
    }
    if (target > cur) {
      start = middle + 1;
      middle = Math.floor((start + end) / 2);
      continue;
    }
    if (target < cur) {
      end = middle - 1;
      middle = Math.floor((start + end) / 2);
      continue;
    }
  }
  return false;
};

const answer = [];
for (let i = 0; i < M; i += 1) {
  const target = numbersToFind[i];
  const res = isIncludes(arr, target);
  answer.push(res ? 1 : 0);
}

console.log(answer.join('\n'));
