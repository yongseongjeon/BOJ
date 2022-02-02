const stdin = `5
11100
11100
00000
00001
00000
`;

const mapSize = stdin.split('\n').shift();
let map = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(''));

map = map.map((x) => [null, ...x, null]);
map = [Array(+mapSize + 2).fill(null), ...map, Array(+mapSize + 2).fill(null)];

let isVisited = [];

for (let i = 0; i < mapSize; i += 1) {
  isVisited.push([true, ...Array(+mapSize).fill(false), true]);
}
isVisited = [
  Array(+mapSize + 2).fill(true),
  ...isVisited,
  Array(+mapSize + 2).fill(true),
];

let k = 0;

for (let i = 1; i <= mapSize; i += 1) {
  for (let j = 1; j <= mapSize; j += 1) {
    debugger;
    dfs(i, j, ++k);
  }
}

function dfs(i, j, k) {
  if (map[i][j] === '0') return;
  if (i === 0 || j === 0 || i === mapSize + 1 || j === mapSize + 1) return;
  if (!isVisited[i][j] && map[i][j] !== '0') {
    isVisited[i][j] = true;
    map[i][j] = k;
  }
  if (!isVisited[i - 1][j] && map[i - 1][j] !== '0') {
    isVisited[i - 1][j] = true;
    map[i - 1][j] = k;
    dfs(i - 1, j, k);
  }
  if (!isVisited[i][j - 1] && map[i][j - 1] !== '0') {
    isVisited[i][j - 1] = true;
    map[i][j - 1] = k;
    dfs(i, j - 1, k);
  }
  if (!isVisited[i][j + 1] && map[i][j + 1] !== '0') {
    isVisited[i][j + 1] = true;
    map[i][j + 1] = k;
    dfs(i, j + 1, k);
  }
  if (!isVisited[i + 1][j] && map[i + 1][j] !== '0') {
    isVisited[i + 1][j] = true;
    map[i + 1][j] = k;
    dfs(i + 1, j, k);
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

console.log('map', map);
console.log('result', result);
console.log(Object.keys(result).length);
console.log(
  Object.values(result)
    .sort((a, b) => a - b)
    .join('\n')
);
