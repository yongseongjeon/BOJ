const stdin = `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5
0 0 1 3 4 5
0 0 4 0 0 4
`;
const [T, ...input] = stdin
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map(Number));

const getDistance = ({ x1, y1, x2, y2 }) => {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

const circleInfo = input.map((x) => {
  return {
    r1: x[2],
    r2: x[5],
    d: getDistance({ x1: x[0], y1: x[1], x2: x[3], y2: x[4] }),
  };
});

const getContactNum = (info) => {
  const r1 = Math.min(info.r1, info.r2);
  const r2 = Math.max(info.r1, info.r2);
  const d = info.d;
  const sum = r2 + r1;
  const dif = r2 - r1;
  const hasTwoContact = d > dif && d < sum; // dif < d < sum
  const hasOneContact = d === dif || d === sum;
  const hasInfinityContact = r1 === r2 && d === 0;
  if (hasInfinityContact) {
    return -1;
  }
  if (hasTwoContact) {
    return 2;
  }
  if (hasOneContact) {
    return 1;
  }
  return 0;
};

let answer = "";
circleInfo.forEach((circle) => {
  const result = getContactNum(circle);
  answer += `${result}\n`;
});

console.log(answer.trim());
