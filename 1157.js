const solution = (str) => {
  let arr = str.trim().toUpperCase().split('');
  const obj = {};
  arr.map((x) => (obj[x] = 0));
  arr.map((x) => (obj[x] += 1));
  const obj2 = [];
  for (const x in obj) {
    obj2.push({ alphabet: x, count: obj[x] });
  }
  const getLargestCount = (object) => {
    let largestNum = 0;
    Object.entries(object).forEach((x) => {
      if (x[1].count > largestNum) {
        largestNum = x[1].count;
      }
    });
    return largestNum;
  };
  let largestWord = Object.entries(obj2).filter(
    (x) => getLargestCount(obj2) === x[1].count
  );
  const equalNum = largestWord.length;
  if (equalNum > 1) {
    return '?';
  }
  return largestWord[0][1].alphabet;
};
const stdin = require('fs').readFileSync('/dev/stdin').toString();
console.log(solution(stdin));
