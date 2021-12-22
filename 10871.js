let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [firstRowInput, secondRowInput] = input;
const [integerNum, compareNum] = firstRowInput.split(" ");
const arr = secondRowInput.split(" ").map((x) => x / 1);

const answer = arr.filter((x) => x < compareNum).join(" ");

console.log(answer);
