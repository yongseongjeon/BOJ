const stdin = `black
black
white
`;
const input = stdin.trim().split('\n');

const color = {
  black: '0',
  brown: '1',
  red: '2',
  orange: '3',
  yellow: '4',
  green: '5',
  blue: '6',
  violet: '7',
  grey: '8',
  white: '9',
};

const mul = {
  black: '',
  brown: '0',
  red: '00',
  orange: '000',
  yellow: '0000',
  green: '00000',
  blue: '000000',
  violet: '0000000',
  grey: '00000000',
  white: '000000000',
};

let answer = input
  .map((x, i) => {
    if (i !== 2) {
      return color[x];
    }
    return mul[x];
  })
  .reduce((pre, cur) => pre + cur);

answer = answer.split('');

for (let i = 0; i < answer.length; i += 1) {
  if (answer[i] !== '0') {
    break;
  }
  answer[i] = null;
}

answer = answer.filter((x) => x).join('');

if (answer) {
  console.log(answer);
} else {
  console.log(0);
}
