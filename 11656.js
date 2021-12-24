const stdin = `baekjoon`;

const stdinLen = stdin.length;
const arr = [];
for (let i = 0; i < stdinLen; i += 1) {
  const str = stdin.slice(i, stdinLen);
  arr.push(str);
}

arr.sort();

console.log(arr.join("\n"));
