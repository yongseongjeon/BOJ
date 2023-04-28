const stdin = `4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0
`;

const N = +stdin.split('\n')[0];
const W = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '))
  .map((x) => x.map(Number));

const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (!arr.length) {
      result.push(m);
      return;
    }
    const arrLen = arr.length;
    for (let i = 0; i < arrLen; i += 1) {
      let cur = arr.slice();
      let next = cur.splice(i, 1);
      permute(cur.slice(), m.concat(next));
    }
  };
  permute(inputArr);
  return result;
};

let res = permutator(
  Array(N - 1)
    .fill(0)
    .map((_, i) => i + 1)
);
res = res.map((x) => [0, ...x, 0]);
res = res.filter(isAllConnected);

function isAllConnected(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (W[arr[i]][arr[i + 1]] === 0) {
      return false;
    }
  }
  return true;
}

const arr = [];
res.forEach((x) => {
  let tmp = 0;
  for (let i = 0; i < N; i += 1) {
    tmp += W[x[i]][x[i + 1]];
  }
  arr.push(tmp);
});

console.log(Math.min(...arr));
