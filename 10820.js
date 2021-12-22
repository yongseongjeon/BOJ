const stdin = require("fs").readFileSync("/dev/stdin").toString();
const input = stdin.split("\n");
input.pop();

const lowerCaseReg = new RegExp(/[a-z]/, "g");
const UpperCaseReg = new RegExp(/[A-Z]/, "g");
const numberReg = new RegExp(/[0-9]/, "g");
const spaceReg = new RegExp(/ /, "g");

input.forEach((x) => {
  const lowerCaseNum =
    x.match(lowerCaseReg) === null ? 0 : x.match(lowerCaseReg).length;
  const UpperCaseNum =
    x.match(UpperCaseReg) === null ? 0 : x.match(UpperCaseReg).length;
  const numberNum = x.match(numberReg) === null ? 0 : x.match(numberReg).length;
  const spaceNum = x.match(spaceReg) === null ? 0 : x.match(spaceReg).length;

  console.log(`${lowerCaseNum} ${UpperCaseNum} ${numberNum} ${spaceNum}`);
});
