const customInput = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna
`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();
const [NM, ...rest] = stdin.split('\n');
const [N, _] = NM.split(' ').map(Number);
const poketmons = rest.slice(0, N);
const testes = rest.slice(N);
const obj1 = {};
const obj2 = {};

poketmons.forEach((p, i) => {
  obj1[p] = i + 1;
  obj2[i + 1] = p;
});
const ans = [];
testes.forEach((t) => {
  if (obj1[t]) {
    ans.push(obj1[t]);
  } else {
    ans.push(obj2[t]);
  }
});
console.log(ans.join('\n'));
