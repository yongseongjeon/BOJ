const getInput = () => {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
};
const customInput = `6`;
const N = +getInput();
const cards = Array(N)
  .fill(1)
  .map((x, i) => x + i);

let idx = 0;

while (cards.length >= idx + 2) {
  // 카드 버리기
  idx++;

  // 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮기기
  cards.push(cards[idx]);
  idx++;
}

console.log(cards[idx]);
