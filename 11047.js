const stdin = require('fs').readFileSync('/dev/stdin').toString();
let valueOfCoin = stdin.trim().split('\n');
let [N, K] = valueOfCoin.shift().split(' ');
valueOfCoin = valueOfCoin.map(Number).reverse();

let usedCoinNum = 0;

valueOfCoin.forEach((coin) => {
  if (coin <= K) {
    usedCoinNum += Math.floor(K / coin);
    K %= coin;
  }
});

console.log(usedCoinNum);
