const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [[fruitNum, initSnakeLen], fruits] = stdin
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((x) => +x));

const canEat = (snakeLen, fruitHeight) => {
  return snakeLen >= fruitHeight;
};

fruits.sort((a, b) => a - b);
let snakeLen = initSnakeLen;
for (let i = 0; i < fruitNum; i++) {
  if (canEat(snakeLen, fruits[i])) {
    snakeLen += 1;
  } else {
    break;
  }
}

console.log(snakeLen);
