const stdin = `4 11
802
743
457
539
`;

const [K, N] = stdin.split('\n')[0].split(' ').map(Number);
const distances = stdin.trim().split('\n').slice(1).map(Number);

let maxDist = Math.max(...distances);

function splitLANCable(dist) {
  return distances.map((d) => Math.floor(d / dist)).reduce((acc, v) => acc + v);
}

function getMiddle(start, end) {
  return Math.floor((start + end) / 2);
}

let start = 1;
let end = maxDist;
let mid = getMiddle(start, end);

while (start <= end) {
  const cableNum = splitLANCable(mid);
  if (cableNum >= N) {
    start = mid + 1;
  }
  if (cableNum < N) {
    end = mid - 1;
  }
  mid = getMiddle(start, end);
}

console.log(mid);
