const stdin = require("fs").readFileSync("/dev/stdin").toString();
let answer = "";
for (let i = stdin; i > 0; i--) {
  for (let j = 0; j < stdin; j++) {
    if (i - 1 > j) {
      answer += " ";
    } else {
      answer += "*";
    }
  }
  answer += "\n";
}

for (let i = 0; i < stdin - 1; i++) {
  for (let j = 0; j < stdin; j++) {
    if (i > j - 1) {
      answer += " ";
    } else {
      answer += "*";
    }
  }
  answer += "\n";
}

console.log(answer);
