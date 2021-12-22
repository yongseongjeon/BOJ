const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "));
let [[cardLen, targetNum], cardList] = input;

cardLen = Number(cardLen);
targetNum = Number(targetNum);
cardList = cardList.map((card) => Number(card));

let biggestNum = 0;

for (let i = 0; i < cardLen - 2; i++) {
  for (let j = i + 1; j < cardLen - 1; j++) {
    for (let k = j + 1; k < cardLen; k++) {
      const tmp = cardList[i] + cardList[j] + cardList[k];
      if (tmp <= targetNum && tmp > biggestNum) {
        biggestNum = tmp;
      }
    }
  }
}

console.log(biggestNum);
