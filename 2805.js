const stdin = `5 20
4 42 40 26 46
`;

const [N, M] = stdin.split('\n')[0].split(' ').map(Number);
const trees = stdin.trim().split('\n')[1].split(' ').map(Number);

function cutTrees(H) {
  return trees
    .map((t) => {
      if (H > t) {
        return 0;
      }
      return t - H;
    })
    .reduce((acc, x) => acc + x);
}

function getMiddle(num1, num2) {
  return Math.floor((num1 + num2) / 2);
}

let start = 1;
let end = Math.max(...trees);
let mid = getMiddle(start, end);

while (start <= end) {
  const treeCutted = cutTrees(mid);
  if (treeCutted < M) {
    end = mid - 1;
  }
  if (treeCutted >= M) {
    start = mid + 1;
  }
  mid = getMiddle(start, end);
}

console.log(mid);
