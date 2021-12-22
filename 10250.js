let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
input = input.map((x) => x.split(" ").map((x) => Number(x)));

input.forEach((x) => {
  const [h, w, n] = x;
  let cnt = 1;
  for (let j = 1; j <= w; j++) {
    for (let i = 1; i <= h; i++) {
      if (n === cnt) {
        console.log(`${i}${j.toString().length > 1 ? j : "0" + j}`);
      }
      cnt += 1;
    }
  }
});
