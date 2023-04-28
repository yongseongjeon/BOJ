const N = +`3999971`;

function getPrimeNumber(n) {
  if (n <= 1) {
    return;
  }
  const primes = Array(n + 1).fill(true);
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  const results = [];
  for (let i = 2; i <= n; i += 1) {
    if (primes[i]) {
      results.push(i);
    }
  }
  return results;
}

function solve() {
  let j = 0;
  let cnt = 0;
  while (primes[j] <= N) {
    if (primes[j] === N) {
      return cnt + 1;
    }
    let total = 0;
    let i = j;
    while (total < N) {
      total += primes[i];
      i += 1;
      if (total === N) {
        cnt += 1;
      }
    }
    j += 1;
  }
  return cnt;
}

const primes = getPrimeNumber(4000000);
console.log(solve());
