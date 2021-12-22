let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
input = input.map((x) => x / 1);
const [a, b, c] = input;
console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
