let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
input = input.map((x) => x / 1);
const [a] = input;

if (a % 400 === 0) console.log(1);
else if (a % 100 === 0) console.log(0);
else if (a % 4 === 0) console.log(1);
else console.log(0);
