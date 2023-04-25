const customInput = `23 48
25`;

const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();

const [curTime, timeTaken] = stdin.split('\n');
const [hour, min] = curTime.split(' ').map(Number);

const qMin = Math.floor((min + +timeTaken) / 60);
const nextMin = (min + +timeTaken) % 60;
const nextHour = (hour + qMin) % 24;
console.log(nextHour, nextMin);
