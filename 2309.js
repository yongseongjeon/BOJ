const stdin = `20
7
23
19
10
15
25
8
13
`;

const talls = stdin.trim().split('\n').map(Number);

function solve() {
  for (let i = 0; i < 9; i += 1) {
    for (let j = i + 1; j < 9; j += 1) {
      const sum = sumWithoutParamsIdx(i, j);
      if (sum === 100) {
        const arr = getArrWithoutParamsIdx(i, j);
        arr.sort((a, b) => a - b);
        const ans = arr.reduce((prev, cur) => prev + cur + '\n', '');
        return ans;
      }
    }
  }
}

console.log(solve());

function getArrWithoutParamsIdx(i, j) {
  const arr = [];
  for (let k = 0; k < 9; k += 1) {
    if (k === i || k === j) {
      continue;
    }
    arr.push(talls[k]);
  }
  return arr;
}

function sumWithoutParamsIdx(i, j) {
  let sum = 0;
  for (let k = 0; k < 9; k += 1) {
    if (k === i || k === j) {
      continue;
    }
    sum += talls[k];
  }
  return sum;
}
