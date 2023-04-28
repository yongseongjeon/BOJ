const stdin = `3
7
9901
`;

const testCases = stdin.trim().split('\n').map(Number);

testCases.forEach((tc) => {
  const ans = solve(tc);
  console.log(ans);
});

function solve(n) {
  let cur = 1;
  let cnt = 1;
  while (true) {
    if (cur % n === 0) {
      return cnt;
    }
    cnt += 1;
    cur = cur * 10 + 1;
    cur = cur % n;
  }
}
