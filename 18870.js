const stdin = `5
2 4 -10 4 -9
`;

const [N, rest] = stdin.trim().split('\n');
const X = rest.split(' ').map(Number);
const sortedX = X.slice().sort(ascend);
const uniqueAndSortedX = removeDuplicates(sortedX);
const transferredX = compressCoordinate(uniqueAndSortedX);
printAnswer(transferredX);

function ascend(a, b) {
  return a - b;
}

function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arr[i + 1]) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

function createCompressionObj(arr) {
  const obj = {};
  arr.forEach((x, i) => {
    obj[x] = i;
  });
  return obj;
}

function compressCoordinate(arr) {
  const compressionObj = createCompressionObj(arr);
  const transferredArr = X.slice();
  for (let i = 0; i < X.length; i += 1) {
    const cur = X[i];
    const to = compressionObj[cur];
    transferredArr[i] = to;
  }
  return transferredArr;
}

function printAnswer(arr) {
  console.log(arr.join(' '));
}
