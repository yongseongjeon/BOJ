let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .match(/c=|c-|dz=|d-|lj|nj|s=|z=|[A-z]/g);

console.log(input.length);
