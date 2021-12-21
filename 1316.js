let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arrLen = input.shift();
input = input.map((x) => x.split(''));

const removeOverlap = (array) => {
  const arr = array.slice();
  const { length } = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
  return arr;
};

const isGroupWord = (array) => {
  const arr = array.slice();
  for (var i = 0; i < arr.length; i++) {
    const overlapNum = arr.filter((el) => el === arr[i]).length;
    if (overlapNum > 1) {
      break;
    }
  }
  return i === arr.length ? true : false;
};

let groupWordArr = [];
input.forEach((word) => {
  const arr = removeOverlap(word);
  groupWordArr.push(isGroupWord(arr));
});

console.log(groupWordArr.filter((x) => x === true).length);
