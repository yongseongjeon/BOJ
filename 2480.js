const customInput = `5 1 6`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();

const [x, y, z] = stdin.split(' ').map(Number);

if (checkAllSameDice(x, y, z)) {
  console.log(10000 + x * 1000);
} else if (checkTwoSameDice(x, y, z)) {
  console.log(1000 + findSameNumber(x, y, z) * 100);
} else if (checkDifferentDice(x, y, z)) {
  console.log(findMaxNumber(x, y, z) * 100);
} else {
  console.log(0);
}

function checkAllSameDice(x, y, z) {
  return x === y && y === z;
}
function checkTwoSameDice(x, y, z) {
  return x === y || y === z || z === x;
}
function checkDifferentDice(x, y, z) {
  return x !== y && y !== z && z !== x;
}
function findSameNumber(x, y, z) {
  if (x === y) {
    return x;
  }
  if (y === z) {
    return y;
  }
  if (z === x) {
    return x;
  }
}
function findMaxNumber(x, y, z) {
  return Math.max(x, y, z);
}
