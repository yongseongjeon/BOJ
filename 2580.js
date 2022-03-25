const stdin = `0 3 5 4 6 9 2 7 8
7 8 2 1 0 5 6 0 9
0 6 0 2 7 8 1 3 5
3 2 1 0 4 6 8 9 7
8 0 4 9 1 3 5 0 6
5 9 6 8 2 0 4 1 3
9 1 7 6 5 2 0 8 0
6 0 3 7 0 1 9 5 2
2 5 8 3 9 4 7 6 0
`;

const board = stdin
  .trim()
  .split('\n')
  .map((x) => x.split(' '))
  .map((x) => x.map(Number));

const originBoard = copy(board);

function copy(arr) {
  const res = Array(9)
    .fill(0)
    .map((x) => Array(9).fill(0));
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      res[i][j] = arr[i][j];
    }
  }
  return res;
}

function canPushNum(loca, num, arr) {
  return checkRectangle(loca, num, arr) && checkLine(loca, num, arr);
}

function getBaseLoca(loca) {
  let [y, x] = loca;
  const getQuotient = (num) => Math.floor(num / 3);
  return [getQuotient(y) * 3, getQuotient(x) * 3];
}

function checkRectangle(loca, num, arr) {
  const [y, x] = getBaseLoca(loca);
  for (let i = y; i < y + 3; i += 1) {
    for (let j = x; j < x + 3; j += 1) {
      if (arr[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

function checkLine(loca, num, arr) {
  for (let i = 0; i < 9; i += 1) {
    if (arr[loca[0]][i] === num) {
      return false;
    }
    if (arr[i][loca[1]] === num) {
      return false;
    }
  }
  return true;
}

function getBlankLoca(arr) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (arr[i][j] === 0) {
        return { y: i, x: j };
      }
    }
  }
  return false;
}

function dfs(arr) {
  const blankLoca = getBlankLoca(arr);
  if (!blankLoca) {
    flag = false;
    answer = copy(arr);
    return;
  }
  if (!flag) {
    return;
  }
  for (let i = 1; i <= 9; i += 1) {
    if (canPushNum([blankLoca.y, blankLoca.x], i, arr)) {
      const cur = copy(arr);
      cur[blankLoca.y][blankLoca.x] += i;
      dfs(cur);
    }
  }
}

let answer;
let flag = true;
dfs(board);
console.log(answer.map((x) => x.join(' ')).join('\n'));
