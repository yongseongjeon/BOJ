const stdin = `8 9 10`;

const max = stdin.split(' ').map(Number);
const bottles = [0, 0, max[2]];

function pour(from, to, bottles) {
  if (bottles[from] === 0) {
    return bottles;
  }
  bottles = bottles.slice();
  const capable = max[to] - bottles[to];
  const movableWater = bottles[from] <= capable ? bottles[from] : capable;
  bottles[to] += movableWater;
  bottles[from] -= movableWater;
  return bottles;
}

function dfs() {
  const isVisited = {};
  const stack = [bottles];
  let answer = [];
  while (stack.length) {
    const bottle = stack.pop();
    if (bottle[0] === 0) {
      answer.push(bottle[2]);
    }
    const candidates = [
      pour(0, 1, bottle),
      pour(0, 2, bottle),
      pour(1, 0, bottle),
      pour(1, 2, bottle),
      pour(2, 0, bottle),
      pour(2, 1, bottle),
    ];
    candidates.forEach((c) => {
      const [x, y, z] = c;
      if (!isVisited[c.join('')]) {
        isVisited[c.join('')] = true;
        stack.push(c);
      }
    });
  }
  return answer;
}

const candidates = dfs();
const answer = candidates
  .filter((x, i, arr) => i === arr.indexOf(x))
  .sort((a, b) => a - b)
  .join(' ');
console.log(answer);
