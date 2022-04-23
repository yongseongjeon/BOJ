const stdin = `14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596
`;

const a = +stdin.split('\n')[0];
const arr = stdin.trim().split('\n')[1].split(' ').map(Number);

if (a === 1) {
  console.log(arr * arr);
} else {
  arr.sort((a, b) => a - b);
  const ans = arr[0] * arr[arr.length - 1];
  console.log(ans);
}
