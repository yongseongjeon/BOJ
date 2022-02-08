const stdin = `1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0
`;
const input = stdin.split('\n');
let map, w, h, isVisited;
while (true) {
  [w, h] = input.shift().split(' ');
  if (w === '0' && h === '0') {
    break;
  }
  map = input.splice(0, h).map((x) => x.split(' '));
  map = map.map((x) => [null, ...x, null]);
  map = [Array(+w + 2).fill(null), ...map, Array(+w + 2).fill(null)];

  isVisited = [];
  for (let i = 0; i < h; i += 1) {
    isVisited.push([true, ...Array(+w).fill(false), true]);
  }
  isVisited = [
    Array(+w + 2).fill(true),
    ...isVisited,
    Array(+w + 2).fill(true),
  ];

  let k = 0;

  for (let i = 1; i <= h; i += 1) {
    for (let j = 1; j <= w; j += 1) {
      dfs(i, j, ++k);
    }
  }
  const result = {};
  map
    .flat(2)
    .filter((x) => typeof x === 'number')
    .sort((a, b) => a - b)
    .forEach((x) => {
      result[x] = (result[x] || 0) + 1;
    });
  console.log(Object.keys(result).length);
}

function dfs(i, j, k) {
  if (map[i][j] === '0') return;
  if (i === 0 || j === 0 || i === w + 1 || j === h + 1) return;
  // 중앙
  if (!isVisited[i][j] && map[i][j] !== '0') {
    isVisited[i][j] = true;
    map[i][j] = k;
  }
  // 좌상
  if (!isVisited[i - 1][j - 1] && map[i - 1][j - 1] !== '0') {
    isVisited[i - 1][j - 1] = true;
    map[i - 1][j - 1] = k;
    dfs(i - 1, j - 1, k);
  }
  // 상
  if (!isVisited[i - 1][j] && map[i - 1][j] !== '0') {
    isVisited[i - 1][j] = true;
    map[i - 1][j] = k;
    dfs(i - 1, j, k);
  }
  // 우상
  if (!isVisited[i - 1][j + 1] && map[i - 1][j + 1] !== '0') {
    isVisited[i - 1][j + 1] = true;
    map[i - 1][j + 1] = k;
    dfs(i - 1, j + 1, k);
  }
  // 우
  if (!isVisited[i][j + 1] && map[i][j + 1] !== '0') {
    isVisited[i][j + 1] = true;
    map[i][j + 1] = k;
    dfs(i, j + 1, k);
  }
  // 우하
  if (!isVisited[i + 1][j + 1] && map[i + 1][j + 1] !== '0') {
    isVisited[i + 1][j + 1] = true;
    map[i + 1][j + 1] = k;
    dfs(i + 1, j + 1, k);
  }
  // 하
  if (!isVisited[i + 1][j] && map[i + 1][j] !== '0') {
    isVisited[i + 1][j] = true;
    map[i + 1][j] = k;
    dfs(i + 1, j, k);
  }
  // 좌하
  if (!isVisited[i + 1][j - 1] && map[i + 1][j - 1] !== '0') {
    isVisited[i + 1][j - 1] = true;
    map[i + 1][j - 1] = k;
    dfs(i + 1, j - 1, k);
  }
  // 좌
  if (!isVisited[i][j - 1] && map[i][j - 1] !== '0') {
    isVisited[i][j - 1] = true;
    map[i][j - 1] = k;
    dfs(i, j - 1, k);
  }
}
