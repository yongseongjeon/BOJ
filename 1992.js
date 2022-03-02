const stdin = `8
11110000
11110000
00011100
00011100
11110000
11110000
11110011
11110011
`;

const N = +stdin.split('\n')[0];
const video = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(''));

[
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1],
];

function isEveryEqualNumber(y, x, n) {
  for (let i = y; i < y + n; i += 1) {
    for (let j = x; j < x + n; j += 1) {
      if (video[y][x] !== video[i][j]) {
        return false;
      }
    }
  }
  return true;
}

let answer = '';

function toQuadTree(y, x, n) {
  if (isEveryEqualNumber(y, x, n)) {
    answer += video[y][x];
    return;
  }

  answer += '(';
  toQuadTree(y, x, n / 2);
  toQuadTree(y, x + n / 2, n / 2);
  toQuadTree(y + n / 2, x, n / 2);
  toQuadTree(y + n / 2, x + n / 2, n / 2);
  answer += ')';
}

toQuadTree(0, 0, N);

console.log(answer);
