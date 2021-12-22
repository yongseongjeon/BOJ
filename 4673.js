const cons = (n) => {
  return (
    n +
    n
      .toString()
      .split("")
      .map((x) => Number(x))
      .reduce((acc, val) => acc + val)
  );
};

const arr = Array(10000)
  .fill(1)
  .map((x, i) => x + i);

for (let i = 1; i <= 10000; i++) {
  const el = cons(i);
  const idx = arr.indexOf(el);
  if (idx !== -1) {
    arr.splice(idx, 1);
  }
}

let answer = "";

arr.forEach((x) => (answer += `${x}\n`));

console.log(answer);
