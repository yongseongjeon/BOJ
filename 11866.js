function getInput() {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
}
const customInput = `7 3`;
const stdin = getInput();
const [N, K] = stdin.split(' ').map(Number);
const s = Array(+N)
  .fill(1)
  .map((x, i) => x + i);

const answer = [];
let curIdx = K - 1;
while (s.length > 0) {
  answer.push(s.splice(curIdx, 1));
  curIdx = (curIdx + K - 1) % s.length;
}
console.log(`<${answer.join(', ')}>`);
