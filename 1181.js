const stdin = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours
`;

const wordsInSet = new Set(stdin.trim().split('\n').slice(1));
const words = Array.from(wordsInSet);
words.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});

const answer = words.reduce((prev, cur) => prev + cur + '\n', '');
console.log(answer);
