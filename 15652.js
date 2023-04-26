const customInput = `4 2`;

const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();

const [N, M] = stdin.split(' ').map(Number);

debugger;

function comb(selected, start) {
  if (selected.length === M) {
    console.log(selected.join(' '));
    return;
  }

  for (let i = start; i < N; i += 1) {
    selected.push(i + 1);
    comb(selected, i);
    selected.pop();
  }
}

comb([], 0);
