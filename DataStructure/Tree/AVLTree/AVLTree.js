class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  rightRotation(disbalanceNode) {
    let newRoot = disbalanceNode.left;
    disbalanceNode.left = newRoot.right;
    newRoot.right = disbalanceNode;
    disbalanceNode.height = 1 + Math.max(this.getHeight(disbalanceNode.left), this.getHeight(disbalanceNode.right));
    newRoot.height = 1 + Math.max(this.getHeight(newRoot.left), this.getHeight(newRoot.right));

    return newRoot;
  }
}


const avlTree = new AVLTree;

console.log(avlTree);

