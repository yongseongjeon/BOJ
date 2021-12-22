const stdin = require("fs").readFileSync("/dev/stdin").toString();
const input = stdin.trim().split("\n");
const N = +input.shift();
const K = +input.shift();
const appleInfo = input.splice(0, K).map((x) => x.split(" ").map(Number));
const L = +input.shift();
const directionInfo = input
  .slice()
  .map((x) => x.split(" ").map((x, i) => (i === 0 ? +x : x)));
directionInfo.push([0, 0]);
const board = [];
for (let i = 0; i <= N + 1; i++) {
  if (i === 0) {
    board.push(Array(N + 2).fill(-1));
  } else if (i === N + 1) {
    board.push(Array(N + 2).fill(-1));
  } else {
    board.push([-1, ...Array(N).fill(0), -1]);
  }
}

appleInfo.map((apple) => {
  board[apple[0]][apple[1]] = 1;
});

const directions = ["Right", "Up", "Left", "Down"];
const headLoca = [1, 1];
const bodyLoca = [];
let curState = 0;
let time = 0;

while (true) {
  // 방향 전환
  const hasOrder = time === (directionInfo[0][0] || "99");
  if (hasOrder) {
    if (directionInfo[0][1] === "L") {
      curState = (curState + 1) % 4;
    } else if (directionInfo[0][1] === "D") {
      curState === 0 ? (curState = 3) : (curState -= 1);
    }
    directionInfo.shift();
  }

  // 꼬리 추가
  bodyLoca.push(headLoca.join(" "));

  // 머리 이동
  const cmd = directions[curState];
  if (cmd === "Right") {
    headLoca[1] += 1;
  } else if (cmd === "Up") {
    headLoca[0] -= 1;
  } else if (cmd === "Left") {
    headLoca[1] -= 1;
  } else {
    headLoca[0] += 1;
  }
  time += 1;

  const cur = board[headLoca[0]][headLoca[1]];
  const isTouchingWall = cur === -1;
  const isTouchingTail = bodyLoca.includes(headLoca.join(" "));
  if (isTouchingWall || isTouchingTail) {
    break;
  }

  // 꼬리 갱신
  if (cur === 1) {
    board[headLoca[0]][headLoca[1]] = 0;
  } else if (cur === 0) {
    bodyLoca.shift();
  }
}

console.log(time);
