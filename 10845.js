const stdin = require("fs").readFileSync("/dev/stdin").toString();
const [N, ...cmds] = stdin
  .trim()
  .split("\n")
  .map((x) => x.split(" "));
const s = [];
let answer = "";
cmds.forEach((cmd) => {
  if (cmd[0] === "push") {
    s.push(cmd[1]);
  } else if (cmd[0] === "pop") {
    answer += (s.length ? s.shift() : -1) + "\n";
  } else if (cmd[0] === "size") {
    answer += s.length + "\n";
  } else if (cmd[0] === "empty") {
    answer += (s.length ? 0 : 1) + "\n";
  } else if (cmd[0] === "front") {
    answer += (s.length ? s[0] : -1) + "\n";
  } else {
    answer += (s.length ? s[s.length - 1] : -1) + "\n";
  }
});

console.log(answer);
