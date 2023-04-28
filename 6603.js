const stdin = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0
`;

const testCases = stdin.trim().split('\n');

const solve = () => {
  for (let i = 0; i < testCases.length; i += 1) {
    if (testCases[i] === '0') {
      return;
    }
    const tc = testCases[i].split(' ').map(Number);
    tc.shift();
    tc.sort((a, b) => a - b);
    const res = getCombinations(tc, 6);
    console.log(res.map((x) => x.join(' ')).join('\n'));
    console.log();
  }
};

function getCombinations(arr, selectedNum) {
  const results = [];
  if (selectedNum === 1) {
    return arr.map((el) => [el]);
  }
  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectedNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

solve();
