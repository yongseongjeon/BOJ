const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [A, B] = stdin.split(" ").map((x) => BigInt(x));

console.log((A + B).toString());
