class MaxHeap {
  constructor() {
    this.heap = [];
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }
  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  add(el) {
    this.heap.push(el);
    const lastIdx = this.heap.length - 1;
    this.heapifyUp(lastIdx);
  }
  heapifyUp(idx) {
    const curIdx = idx;
    const parentIdx = this.getParentIdx(idx);
    if (this.heap[curIdx] > this.heap[parentIdx]) {
      this.swap(curIdx, parentIdx);
      this.heapifyUp(parentIdx);
    }
  }
  popMax() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    const last = this.heap.pop();
    this.heap[0] = last;
    this.heapifyDown(0);
    return max;
  }
  heapifyDown(idx) {
    const leftChildIdx = this.getLeftChildIdx(idx);
    const rightChildIdx = this.getRightChildIdx(idx);
    let maxIdx = idx;
    if (this.heap[leftChildIdx] > this.heap[maxIdx]) {
      maxIdx = leftChildIdx;
    }
    if (this.heap[rightChildIdx] > this.heap[maxIdx]) {
      maxIdx = rightChildIdx;
    }
    if (this.heap[maxIdx] > this.heap[idx]) {
      this.swap(maxIdx, idx);
      this.heapifyDown(maxIdx);
    }
  }
}

const maxHeap = new MaxHeap();

const stdin = `13
0
1
2
0
0
3
2
1
0
0
0
0
0
`;

const answer = [];
const cmds = stdin.trim().split('\n').slice(1).map(Number);
cmds.forEach(solve);

function solve(cmd) {
  if (cmd !== 0) {
    maxHeap.add(cmd);
    return;
  }
  if (!maxHeap.heap.length) {
    answer.push(0);
    return;
  }
  answer.push(maxHeap.popMax());
}

console.log(answer.join('\n'));
