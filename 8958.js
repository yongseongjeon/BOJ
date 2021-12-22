let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const len = Number(input[0]);

for (let i = 1; i <= len; i++) {
  const quizResult = input[i].split("");
  let currentScore = 0;
  let totalScore = 0;
  quizResult.forEach((x) => {
    if (x === "O") {
      currentScore += 1;
      totalScore += currentScore;
    } else {
      currentScore = 0;
    }
  });
  console.log(totalScore);
}
