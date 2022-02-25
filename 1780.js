const stdin = `9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1
`;

const N = +stdin.split('\n')[0];
const paper = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '));

let cnt = [0, 0, 0];

function split(y, x, n) {
  if (isEveryEqualNumber(y, x, n)) {
    cnt[+paper[y][x] + 1] += 1;
    return;
  }

  split(y, x, n / 3);
  split(y, x + n / 3, n / 3);
  split(y, x + (2 * n) / 3, n / 3);
  split(y + n / 3, x, n / 3);
  split(y + n / 3, x + n / 3, n / 3);
  split(y + n / 3, x + (2 * n) / 3, n / 3);
  split(y + (2 * n) / 3, x, n / 3);
  split(y + (2 * n) / 3, x + n / 3, n / 3);
  split(y + (2 * n) / 3, x + (2 * n) / 3, n / 3);
}

function isEveryEqualNumber(y, x, n) {
  for (let i = y; i < y + n; i += 1) {
    for (let j = x; j < x + n; j += 1) {
      if (paper[y][x] !== paper[i][j]) {
        return false;
      }
    }
  }
  return true;
}

split(0, 0, N);

const answer = cnt.join('\n');
console.log(answer);
