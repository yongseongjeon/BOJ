const stdin = `10 1 5
`;
let [N, M, K] = stdin.split(' ').map(Number);

debugger;

while (K > 0) {
  if (N >= 2 * M) {
    N -= 1;
  } else {
    M -= 1;
  }
  K -= 1;
}

let cnt = 0;
while (N >= 2 && M >= 1) {
  N -= 2;
  M -= 1;
  cnt += 1;
}

console.log(cnt);
