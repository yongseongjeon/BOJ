const stdin = `6
20 1 15 8 4 10
`;

const A = stdin.trim().split('\n')[1].split(' ').map(Number);

function sum(arr) {
  const arrLen = arr.length;
  let total = 0;
  for (let i = 0; i < arrLen - 1; i += 1) {
    total += Math.abs(arr[i] - arr[i + 1]);
  }
  return total;
}

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

const res = permutator(A).map(sum);
console.log(Math.max(...res));
