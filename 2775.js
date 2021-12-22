let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

const zeroFloor = Array(14)
  .fill(1)
  .map((x, i) => x + i);
const apart = [zeroFloor];

for (let i = 0; i < 14; i++) {
  const floor = [];
  for (let j = 0; j < 14; j++) {
    const sumOfPeople =
      floor[j - 1] === undefined ? apart[i][j] : floor[j - 1] + apart[i][j];
    floor.push(sumOfPeople);
  }
  apart.push(floor);
}

const testCaseNum = input[0];
input.shift();

for (let i = 0; i < testCaseNum; i++) {
  const j = i * 2;
  const k = input[j];
  const n = input[j + 1];
  console.log(apart[k][n - 1]);
}
