const stdin = `3
3 2 11
`;
const P = stdin.split('\n')[1].split(' ').map(Number);
P.sort((a, b) => a - b);
console.log(P);

const Plen = P.length;
for (let i = 1; i < Plen; i += 1) {
  P[i] += P[i - 1];
}

console.log(P.reduce((acc, x) => acc + x, 0));
