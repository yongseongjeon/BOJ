const stdin = `2
0 1
1 0
`;
debugger;
const N = +stdin.split('\n').shift();
const map = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '));

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

let v = [...Array(N)].map(() => Array(N).fill(false));
function dfs(i, j, n) {
  v[i][j] = true;
  if (map[i][j] === '1') {
    map[i][j] = n;
  }

  for (let k = 0; k < 4; k += 1) {
    const y = i + dy[k];
    const x = j + dx[k];
    if (x < 0 || y < 0 || x >= N || y >= N) continue;
    if (map[y][x] === '0') continue;
    if (v[y][x]) continue;

    dfs(y, x, n);
  }
}

let cnt = 0;

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (map[i][j] === '0') continue;
    dfs(i, j, ++cnt);
  }
}

let islands = map.flat(1).filter(Number);
islands = islands.filter((x, i) => islands.indexOf(x) === i);

function bfs(yy, xx) {
  const v = [...Array(N)].map(() => Array(N).fill(false));
  const island = map[yy][xx];
  const q = [[yy, xx]];
  const d = [...Array(N)].map(() => Array(N).fill(0));
  v[yy][xx] = true;

  while (q.length) {
    const [i, j] = q.shift();
    let y;
    let x;
    for (let k = 0; k < 4; k += 1) {
      y = i + dy[k];
      x = j + dx[k];
      // 인덱스 밖이면
      if (x < 0 || y < 0 || x >= N || y >= N) continue;
      // 같은 땅이면
      if (map[y][x] === island) continue;
      // 방문 했으면
      if (v[y][x]) continue;
      // 바다면
      if (map[y][x] === '0') {
        q.push([y, x]);
        v[y][x] = true;
        d[y][x] = d[i][j] + 1;
        continue;
      }
      // 다른 섬 닿았으면
      return d[i][j];
    }
  }
}

const getAnswer = () => {
  const result = [];

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (map[i][j] === '0') continue;
      const res = bfs(i, j);
      if (res) {
        result.push(res);
      }
    }
  }

  return Math.min(...result);
};
debugger;
const answer = getAnswer();
console.log(answer);
