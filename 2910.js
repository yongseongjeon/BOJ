const stdin = `9 77
11 33 11 77 54 11 25 25 33
`;

const [N, C] = stdin.split('\n')[0].split(' ').map(Number);
const S = stdin.trim().split('\n')[1].split(' ').map(Number);
const arr = removeDuplicate(S);

const counter = {};
arr.forEach((x, idx) => (counter[x] = { order: idx, cnt: 0, value: x }));
S.forEach((s) => (counter[s].cnt += 1));
const sequence = Object.values(counter);
sequence.sort((a, b) => {
  if (a.cnt === b.cnt) {
    return a.order - b.order;
  }
  return b.cnt - a.cnt;
});

const answer = [];
sequence.forEach((x) => {
  const { cnt, value } = x;
  answer.push(...Array(cnt).fill(value));
});

console.log(answer.join(' '));

function removeDuplicate(arr) {
  const set = new Set();
  arr.forEach((x) => set.add(x));
  return Array.from(set);
}
