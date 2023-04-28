const stdin = require('fs').readFileSync('/dev/stdin').toString();
const [L, C] = stdin.split('\n')[0].split(' ').map(Number);
const words = stdin.split('\n')[1].split(' ');

function getCombination(arr, selectNum) {
  if (selectNum === 1) {
    return arr.map((x) => [x]);
  }
  const result = [];
  arr.forEach((x, i, origin) => {
    const rest = origin.slice(i + 1);
    const combinations = getCombination(rest, selectNum - 1);
    const attached = combinations.map((c) => [x, ...c]);
    result.push(...attached);
  });
  return result;
}

function validateConsonantVowelRule(arr) {
  let consonantCnt = 0;
  let vowelCnt = 0;
  return arr.some((x, i) => {
    if (isVowel(words[x - 1])) {
      vowelCnt += 1;
    } else {
      consonantCnt += 1;
    }
    if (vowelCnt >= 1 && consonantCnt >= 2) {
      return true;
    }
  });
}

function isVowel(char) {
  return (
    char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
  );
}

function createWord(arr) {
  return arr.reduce((acc, x) => acc + obj[x], '');
}

words.sort();
const obj = {};
words.forEach((w, i) => {
  obj[i + 1] = w;
});
console.log(obj);

const arr = Array(C)
  .fill(1)
  .map((x, i) => x + i);
combination = getCombination(arr, L)
  .filter(validateConsonantVowelRule)
  .map(createWord)
  .join('\n');

console.log(combination);
