let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("");

const arr = Array(26).fill(-1);
input.forEach((str) => (arr[str.charCodeAt(0) - 97] = input.indexOf(str)));

console.log(arr.join(" "));
