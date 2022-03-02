const stdin = `3
`;

const N = +stdin;
let cnt = 0;
let answer = '';

function hanoi(num, from, to) {
  if (num === 1) {
    cnt += 1;
    answer += `${from} ${to}\n`;
    return;
  }
  const empty = 6 - from - to;
  hanoi(num - 1, from, empty);
  cnt += 1;
  answer += `${from} ${to}\n`;
  hanoi(num - 1, empty, to);
}

hanoi(N, 1, 3);

console.log(cnt);
console.log(answer);
