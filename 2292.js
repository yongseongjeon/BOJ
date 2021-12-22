let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const generalTerm = (x) => {
  const n = Number(x);
  return 3 * n * n - 3 * n + 1;
};

let i = 1;
while (input > generalTerm(i)) {
  i += 1;
}

if (input === "1") {
  console.log(0);
} else {
  console.log(i);
}
