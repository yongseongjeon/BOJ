const getPrime = ({ length }) => {
  const arr = [false, false, ...Array(length - 1).fill(true)];
  for (let i = 2; i <= length; i += 1) {
    if (arr[i]) {
      for (let j = i * 2; j <= length; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.map((x, i) => (x ? i : false)).filter((x) => x);
};

getAnswer = (arr) => {
  return arr.reduce(
    (pre, cur) => {
      if (pre[1] - pre[0] > cur[1] - cur[0]) {
        return pre;
      }
      return cur;
    },
    [0, 0]
  );
};

const stdin = `20
999998
0
`;
const primeNumbers = getPrime({ length: 1000000 }); // 1000000
const input = stdin.trim().split("\n").map(Number);
input.pop();

input.forEach((x) => {
  let answer = [];
  for (let i = 0; i < 1000000; i += 1) {
    console.log(primeNumbers[i]);
    if (primeNumbers[i] > x) break;
    for (let j = i + 1; j < 1000000; j += 1) {
      const a = primeNumbers[i];
      const b = primeNumbers[j];
      if (a + b > x) break;
      if (a + b === x) {
        answer.push([a, b]);
      }
    }
  }
  console.log(`${x} = ${getAnswer(answer).join(" + ")}`);
});

// 시간초과났음
// 시간복잡도 n^3인듯함
// https://www.acmicpc.net/problem/6588
