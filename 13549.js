const getInput = () => {
  const isLinux = process.platform === 'linux';
  if (isLinux) {
    return require('fs').readFileSync('/dev/stdin').toString().trim();
  }
  return customInput.trim();
};
const customInput = `5 17`;
const stdin = getInput();
const [N, K] = stdin.split(' ').map(Number);
const v = Array.from({ length: 100_000 }, () => false);

console.log(bfs());

function bfs() {
  let min = Infinity;
  let i = 0;
  const q = [[N, 0]];
  v[N] = true;

  if (N === K) {
    return 0;
  }

  while (q.length > i) {
    const [curX, curTime] = q[i++];

    if (curX === K) {
      min = Math.min(min, curTime);
    }

    const candidates = [curX * 2, curX - 1, curX + 1];
    for (let i = 0; i < 3; i += 1) {
      const nx = candidates[i];
      if (!isValid(nx)) continue;
      const isTeleportation = i === 0;
      q.push([nx, isTeleportation ? curTime : curTime + 1]);
      v[nx] = true;
    }
  }
  return min;
}

function isValid(loca) {
  return !v[loca] && loca >= 0 && loca <= 100_000;
}
