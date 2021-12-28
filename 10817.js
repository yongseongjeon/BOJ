const stdin = `98 2 99`;
const input = stdin
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(input[1]);
