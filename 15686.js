const stdin = require("fs").readFileSync("/dev/stdin").toString();
const city = stdin
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((x) => +x));
const [N, M] = city.shift().map((x) => +x);
const chickenLocation = [];
const houseLocation = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 2) {
      chickenLocation.push([i, j]);
    } else if (city[i][j] === 1) {
      houseLocation.push([i, j]);
    }
  }
}

function combination(source, target, n, r, count) {
  if (r === 0) {
    shopCombination.push(target);
  } else if (n === 0 || n < r) {
    return;
  } else {
    target.push(source[count]);
    combination(source, target.slice(), n - 1, r - 1, count + 1);
    target.pop();
    combination(source, target.slice(), n - 1, r, count + 1);
  }
}

const shopCombination = [];
combination(chickenLocation, [], chickenLocation.length, M, 0);
const answer = [];

shopCombination.map((el) => {
  let distance = 0;
  houseLocation.map((h) => {
    let tmp = Infinity;
    el.map((x) => {
      tmp = Math.min(tmp, Math.abs(h[0] - x[0]) + Math.abs(h[1] - x[1]));
    });
    distance += tmp;
  });
  answer.push(distance);
});

console.log(Math.min(...answer));
