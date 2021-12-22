const stdin = require("fs").readFileSync("/dev/stdin").toString();
const input = stdin.split("");

const ROT13 = (input) => {
  let answer = "";
  input.map((x) => {
    const code = x.charCodeAt();
    if (65 <= code && code <= 90) {
      answer += String.fromCharCode(((code - 65 + 13) % 26) + 65);
    } else if (97 <= code && code <= 122) {
      answer += String.fromCharCode(((code - 97 + 13) % 26) + 97);
    } else {
      answer += x;
    }
  });
  return answer;
};

console.log(ROT13(input));
