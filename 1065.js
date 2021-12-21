let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const isHanNum = (n) => {
  const len = n.length;
  if (len === 1) {
    return true;
  } else if (len === 2 || len === 3) {
    const arr = [];
    for (let i = 0; i < len - 1; i++) {
      const diff = n[i] - n[i + 1];
      if (!arr.includes(diff)) {
        arr.push(diff);
      }
    }
    if (arr.length > 1) {
      return false;
    }
    return true;
  }
  return false;
};

let cnt = 0;
for (let i = 1; i <= input; i++) {
  i = i.toString();
  if (isHanNum(i)) {
    cnt += 1;
  }
}

console.log(cnt);
