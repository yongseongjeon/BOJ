const getGCD = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const stdin = require("fs").readFileSync("/dev/stdin").toString();
const input = stdin.split(" ").map(Number);

const bigger = Math.max(...input);
const smaller = Math.min(...input);
const gcd = getGCD(bigger, smaller);
const lcm = (bigger * smaller) / gcd;

console.log(`${gcd}\n${lcm}`);
