const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = stdin.slice().map((x) => x.split(" "));
const arr1 = [];
const arr2 = [];
input.forEach((x) => {
  arr1.push(x[0]);
  arr2.push(x[1]);
});
const answer = [];

arr1.sort();
arr2.sort();

for (let i = 0; i < 2; i++) {
  if (arr1[i] === arr1[i + 1]) {
    arr1.splice(i, 2);
  }
  if (arr2[i] === arr2[i + 1]) {
    arr2.splice(i, 2);
  }
}

console.log(`${arr1[0]} ${arr2[0]}`);
