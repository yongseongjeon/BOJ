const stdin = require("fs").readFileSync("/dev/stdin").toString();
let answer = "";

for (let i = 0; i < stdin; i++) {
  for (let j = 0; j < stdin * 2; j++) {
    if (j > i && j < stdin * 2 - i - 1) {
      answer += " ";
    } else {
      answer += "*";
    }
  }
  answer += "\n";
}
for (let i = stdin - 2; i >= 0; i--) {
  for (let j = 0; j < stdin * 2; j++) {
    if (j > i && j < stdin * 2 - i - 1) {
      answer += " ";
    } else {
      answer += "*";
    }
  }
  answer += "\n";
}

console.log(answer);
