const customInput = `77 77 7777`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const ans = stdin.split(' ').reduce((pre, cur) => pre + +cur, 0);
console.log('ans', ans);
