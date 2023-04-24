const customInput = `4
Baha enter
Askar enter
Baha leave
Artem enter`;

const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();

const [n, ...rest] = stdin.split('\n');
const v = {};
rest.forEach((x) => {
  const [person, action] = x.split(' ');
  if (action === 'enter') {
    v[person] = true;
  } else if (action === 'leave') {
    v[person] = false;
  }
});
const room = [];
for (let cur of Object.keys(v)) {
  if (v[cur]) {
    room.push(cur);
  }
}
room.sort((a, b) => {
  return b > a ? 1 : -1;
});
console.log(room.join('\n'));
