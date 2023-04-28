const stdin = `3
21 Junkyu
21 Dohyun
20 Sunyoung
`;

const arr = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x, i) => [i, ...x.split(' ')]);

arr.sort((a, b) => {
  const [aIdx, aAge] = a;
  const [bIdx, bAge] = b;
  if (aAge === bAge) {
    return aIdx - bIdx;
  }
  return aAge - bAge;
});

const answer = arr.reduce((prev, cur) => {
  return `${prev}${cur[1]} ${cur[2]}\n`;
}, '');

console.log(answer);
