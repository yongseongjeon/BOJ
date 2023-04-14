const stdin = `3
2 2
1 5
13 29
`;
const [T, ...rest] = stdin.trim().split('\n');
const arr = [1];
for (let t = 0; t < T; t += 1) {
  const [R, N] = rest
    .shift()
    .split(' ')
    .map((x) => +x);

  const comb = Math.round(
    getFactorial(N, arr) / (getFactorial(N - R, arr) * getFactorial(R, arr))
  );
  console.log(comb);
}

function getFactorial(n, arr) {
  const arrLen = arr.length;
  if (n === 0) return 1;
  if (arrLen > n) {
    return arr[n - 1];
  }
  for (let i = arrLen; i < n; i += 1) {
    arr.push(arr[i - 1] * (i + 1));
  }
  return arr[n - 1];
}
