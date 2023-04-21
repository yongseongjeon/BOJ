const customInput = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`;
const stdin =
  process.platform === 'linux'
    ? require('fs').readFileSync('/dev/stdin').toString().trim()
    : customInput.trim();

const str = stdin.split('\n');
str.some((s) => {
  if (s === '.') return true;
  console.log(checkBalanceStr(s) ? 'yes' : 'no');
});

function checkBalanceStr(str) {
  const stack = [];
  const ans = str.split('').some((s) => {
    if (s === '(') {
      stack.push('(');
    } else if (s === '[') {
      stack.push('[');
    } else if (s === ')') {
      if (stack.at(-1) !== '(') {
        return true;
      } else {
        stack.pop();
      }
    } else if (s === ']') {
      if (stack.at(-1) !== '[') {
        return true;
      } else {
        stack.pop();
      }
    }
    return false;
  });
  if (ans) {
    return false;
  }
  return stack.length === 0;
}
