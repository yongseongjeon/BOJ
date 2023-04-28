const stdin = `4 3
2 3 5 9
1 4 7
`;

const [N, M] = stdin.split('\n')[0].split(' ').map(Number);
const [A, B] = stdin
  .split('\n')
  .slice(1)
  .map((x) => x.split(' ').map(Number));

let answer = [];
let pA = 0;
let pB = 0;

const len = N + M;
for (let i = 0; i < len; i += 1) {
  if (pA >= N) {
    answer = [...answer, ...B.slice(pB)];
    break;
  }
  if (pB >= M) {
    answer = [...answer, ...A.slice(pA)];
    break;
  }
  if (A[pA] <= B[pB]) {
    answer.push(A[pA]);
    pA += 1;
  } else {
    answer.push(B[pB]);
    pB += 1;
  }
}

console.log(answer.join(' '));
