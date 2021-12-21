const stdin = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((x) => +x);
const [fixedCost, variableCost, sellingCost] = stdin;
const income = sellingCost - variableCost;

if (income <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(fixedCost / income) + 1);
}
