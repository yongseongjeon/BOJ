let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const reverseStr = (str) => {
  return str[2] + str[1] + str[0];
};

const biggerNum = (str1, str2) => {
  return Math.max(Number(str1), Number(str2));
};

console.log(biggerNum(reverseStr(input[0]), reverseStr(input[1])));
