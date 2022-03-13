const stdin = `3
1033 8179
1373 8017
1033 1033
`;

const testCases = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '))
  .map((x) => x.map(Number));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addLast(node) {
    this.size += 1;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }
    this.tail.next = node;
    this.tail = node;
    return node;
  }
  removeFirst() {
    const tmp = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return tmp;
  }
  getSize() {
    return this.size;
  }
}

class Queue {
  constructor() {
    this.q = new LinkedList();
  }
  enqueue(node) {
    return this.q.addLast(node);
  }
  dequeue() {
    return this.q.removeFirst();
  }
  getSize() {
    return this.q.getSize();
  }
}

function isPrime(n) {
  for (let i = 2; i < n - 1; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function bfs(cur, target) {
  const queue = new Queue();
  const isVisited = Array(10000).fill(false);
  queue.enqueue([new Node(cur), 0]);
  while (queue.getSize()) {
    let [curNode, depth] = queue.dequeue();
    if (curNode.data === target) {
      return depth;
    }
    const candidates = changeOneDigit(curNode.data);
    depth += 1;
    candidates.forEach((c) => {
      if (!isVisited[c]) {
        queue.enqueue([new Node(c), depth]);
        isVisited[c] = true;
      }
    });
  }
  return 0;
}

function changeOneDigit(num) {
  const candidates = [];
  for (let i = 1; i <= 9; i += 1) {
    for (let j = 1; j <= 1000; j *= 10) {
      const changedPlus = num + i * j;
      const changedMinus = num - i * j;
      if (isChangeOneDigit(num, changedPlus)) {
        candidates.push(changedPlus);
      }
      if (isChangeOneDigit(num, changedMinus)) {
        candidates.push(changedMinus);
      }
    }
  }
  return candidates.filter(isPrime).filter(validateRange);
}

function isChangeOneDigit(origin, changed) {
  let cnt = 0;
  const originStr = origin + '';
  const changedStr = changed + '';
  const originLen = originStr.length;
  for (let i = 0; i < originLen; i += 1) {
    if (originStr[i] !== changedStr[i]) {
      cnt += 1;
    }
    if (cnt >= 2) {
      return false;
    }
  }
  return cnt === 1;
}

testCases.forEach((tc) => console.log(bfs(...tc)));

function validateRange(num) {
  return num >= 1000 && num <= 9999;
}
