function getInput() {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
}

const customInput = `15663`;
const stdin = getInput();
const dp = [0];

for (let i = 1; i <= 50_000; i += 1) {
  dp[i] = Infinity;
  for (let j = 1; j ** 2 <= i; j += 1) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[stdin]);
