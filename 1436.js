const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let n = Number(input);

const isEndNum = (num) => {
  let n = num.toString();
  for (let i = 0, len = n.length - 2; i < len; i++) {
    if (n[i] + n[i + 1] + n[i + 2] === '666') {
      return true;
    }
  }
  return false;
};

let num = 0;
let current = 0;

while (n !== current) {
  num += 1;
  if (isEndNum(num)) {
    current += 1;
  }
}

console.log(num);
