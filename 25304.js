const customInput = `260000
4
20000 5
30000 2
10000 6
5000 8
`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const [X, N, ...rest] = stdin.split('\n');
const totalPrice = rest.reduce((pre, cur) => {
  const [curPrice, q] = cur.split(' ').map(Number);
  return pre + curPrice * q;
}, 0);

console.log(+X === totalPrice ? 'Yes' : 'No');
