class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.result = [];
  }

  getRoot() {
    return this.root;
  }

  setRoot(node) {
    this.root = node;
  }

  connectNode(node, left, right) {
    node.left = left;
    node.right = right;
    return node;
  }

  cleanResult() {
    this.result = [];
  }

  preorder(node) {
    if (node) {
      this.result.push(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  inorder(node) {
    if (node) {
      this.inorder(node.left);
      this.result.push(node.data);
      this.inorder(node.right);
    }
  }

  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      this.result.push(node.data);
    }
  }
}

const stdin = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .
`;

const N = +stdin.split('\n').shift();
const nodes = stdin
  .trim()
  .split('\n')
  .slice(1)
  .map((x) => x.split(' '))
  .map((x) =>
    x.map((x) => {
      if (x === '.') return null;
      return x;
    })
  );

const tree = new Tree();

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const n = {};
for (let i = 0; i < N; i += 1) {
  n[alphabet[i]] = new Node(alphabet[i]);
}

nodes.forEach((node) => {
  const [root, left, right] = node;
  tree.connectNode(n[root], n[left], n[right]);
});

tree.setRoot(n['A']);

tree.preorder(tree.getRoot());
console.log(tree.result.join(''));
tree.cleanResult();

tree.inorder(tree.getRoot());
console.log(tree.result.join(''));
tree.cleanResult();

tree.postorder(tree.getRoot());
console.log(tree.result.join(''));
tree.cleanResult();
