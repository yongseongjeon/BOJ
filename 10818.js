let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let length = input[0];
let arr = input[1];
arr = arr.split(" ").map((x) => Number(x));

let lowestNum = arr[0];
let largestNum = arr[0];

for (let i = 0; i < length; i++) {
  if (lowestNum > arr[i]) {
    lowestNum = arr[i];
  }
  if (largestNum < arr[i]) {
    largestNum = arr[i];
  }
}

const answer = `${lowestNum} ${largestNum}`;

console.log(answer);
