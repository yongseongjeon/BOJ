const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [N, B] = stdin.split(" ").map(Number);

const changeBase = (a, b) => {
  const arr = [];
  let r = a % b;
  while (a) {
    arr.unshift(r);
    a = Math.floor(a / b);
    r = a % b;
  }
  return arr;
};

const changeToAlphabet = (arr) => {
  return arr
    .map((x) => {
      if (x < 10) {
        return x;
      }
      return String.fromCharCode(x + 55);
    })
    .join("");
};

console.log(changeToAlphabet(changeBase(N, B)));
