const stdin = `15 28 19`;
const [E, S, M] = stdin.split(' ').map(Number);

let e = 1;
let s = 1;
let m = 1;
let year = 1;

while (true) {
  if (E === e && S === s && M === m) {
    break;
  }
  year += 1;
  const curE = (e + 1) % 15;
  const curS = (s + 1) % 28;
  const curM = (m + 1) % 19;
  e = curE === 0 ? 15 : curE;
  s = curS === 0 ? 28 : curS;
  m = curM === 0 ? 19 : curM;
}

console.log(year);
