const stdin = `5
6 7
6 6
5 6
5 5
7 7
`;

let conferences = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '))
  .map((x) => x.map(Number));

conferences = conferences.map((c) => {
  return {
    start: c[0],
    end: c[1],
  };
});

conferences.sort((a, b) => {
  if (a.end === b.end) {
    return a.start - b.start;
  }
  return a.end - b.end;
});

const conferencesLen = conferences.length;
const timeTable = [conferences[0]];
let i = 1;
while (i < conferencesLen) {
  const cur = conferences[i];
  if (cur.start < timeTable[timeTable.length - 1].end) {
    i += 1;
  } else {
    timeTable.push(cur);
    i += 1;
  }
}
console.log(timeTable.length);
