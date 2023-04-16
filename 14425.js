const stdin = `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
startlink
startlink
startlink
startlink
startlink
startlink
startlink
`;
debugger;
const [NM, ...rest] = stdin.trim().split('\n');
const [N, M] = NM.split(' ');
const S = rest.slice(0, N);
const stringToBeChecked = rest.slice(N);
const map = new Map();
stringToBeChecked.forEach((str) => {
  if (map.get(str) === undefined) {
    map.set(str, 1);
  } else {
    map.set(str, map.get(str) + 1);
  }
});

console.log('map', map);
console.log('S', S);
const ans = S.reduce((pre, cur) => {
  console.log('map.get(cur)', map.get(cur));
  if (map.get(cur) === undefined) {
    return pre;
  }
  return pre + map.get(cur);
}, 0);

console.log(ans);
