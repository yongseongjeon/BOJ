let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const len = Number(input[0]);

for (let i = 1; i <= len; i++) {
  const scoreList = input[i].split(" ").map((x) => Number(x));
  scoreList.shift();
  const averageScore =
    scoreList.reduce((acc, score) => acc + score) / scoreList.length;

  let cnt = 0;

  scoreList.forEach((score) => {
    if (score > averageScore) {
      cnt += 1;
    }
  });

  const averageOver = (cnt / scoreList.length) * 100;

  console.log(`${averageOver.toFixed(3)}%`);
}
