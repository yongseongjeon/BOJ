const customInput = `20`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const q = Math.floor(stdin / 4);
const r = stdin % 4;
const longs = Array.from({ length: q }, () => 'long');
if (r) {
  longs.push('long');
}
longs.push('int');
console.log(longs.join(' '));
