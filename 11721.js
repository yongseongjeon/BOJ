const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString();
for (let i = 0; i < stdin.length; i += 10) {
  console.log(stdin.slice(i, i + 10));
}
