function getInput() {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
}

const customInput = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face
`;
const stdin = getInput().split('\n');
const testCaseNum = stdin[0];

let outfitNumIdx = 1;
for (let i = 0; i < testCaseNum; i += 1) {
  const outfitNum = +stdin[outfitNumIdx];
  const outfits = stdin.slice(outfitNumIdx + 1, outfitNumIdx + 1 + outfitNum);

  const outfitObj = toOutfitObject(outfits);

  let answer = 1;
  for (const [_, outfits] of Object.entries(outfitObj)) {
    answer = answer * (outfits.length + 1);
  }
  console.log(answer - 1);

  outfitNumIdx = outfitNumIdx + 1 + outfitNum;
}

function toOutfitObject(string) {
  return string.reduce((prev, cur) => {
    const [outfit, category] = cur.split(' ');
    if (prev[category]) {
      prev[category].push(outfit);
      return prev;
    }
    prev[category] = [outfit];
    return prev;
  }, {});
}
