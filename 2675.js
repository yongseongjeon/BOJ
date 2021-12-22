let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input;
arr.shift();
arr = arr.map((x) => x.split(" "));
let answer = "";

arr.forEach((x, i) => {
  const [n, str] = x;
  const len = str.length;
  for (let j = 0; j < len; j++) {
    for (let q = 0; q < n; q++) {
      answer += str[j];
    }
  }
  console.log(answer);
  answer = "";
});
