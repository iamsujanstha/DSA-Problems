class BTSNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(element) {
    const newNode = new BTSNode(element);

    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let tempNode = this.root;

    while (tempNode) {
      if (element === tempNode.value) return undefined;

      if (element < tempNode.value) {
        if (tempNode.left === null) {
          tempNode.left = newNode;
          return;
        } else {
          tempNode = tempNode.left;
        }
      } else {
        if (tempNode.right === null) {
          tempNode.right = newNode;
          return;
        } else {
          tempNode = tempNode.right;
        }
      }
    }
  }

  levelOrderTraversal() {
    if (!this.root) return;
    let queue = [this.root];
    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}


const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(90);
binarySearchTree.insert(80);
binarySearchTree.insert(70);
binarySearchTree.insert(60);
binarySearchTree.insert(50);
binarySearchTree.insert(40);

binarySearchTree.levelOrderTraversal();
console.log(binarySearchTree);



