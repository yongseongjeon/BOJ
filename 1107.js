const customInput = `6 
9
0 2 3 4 5 6 7 8 9
`;
const stdin = getInput();
const [targetChannel, brokenBtnNum, rest] = stdin.split('\n');
const brokenBtn = rest
  ? rest.split(' ').reduce((prev, cur) => {
      prev[cur] = true;
      return prev;
    }, {})
  : {};

const answer = solve();
console.log(answer);

function solve() {
  let cnt = Math.abs(100 - targetChannel);
  for (let i = 0; i < 1_000_000; i += 1) {
    const numString = String(i);
    const hasBrokenBtn = numString.split('').some((x) => brokenBtn[x]);
    if (hasBrokenBtn) continue;
    cnt = Math.min(cnt, Math.abs(i - targetChannel) + numString.length);
  }
  return cnt;
}

function getInput() {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
}
