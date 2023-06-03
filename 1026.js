function getInput() {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
}

const customInput = `9
5 15 100 31 39 0 0 3 26
11 12 13 2 3 4 5 9 1
`;
const stdin = getInput();
const [N, A, B] = stdin.split('\n');

const answer = solve();
console.log(answer);

function solve() {
  const sortedA = toArray(A).sort((a, b) => b - a);
  const sortedB = toArray(B).sort((a, b) => a - b);

  return sortedA.reduce((acc, cur, idx) => {
    return acc + cur * sortedB[idx];
  }, 0);
}

function toArray(string) {
  return string.split(' ').map(Number);
}
