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

    while (true) {
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
}


const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(90);
binarySearchTree.insert(80);
binarySearchTree.insert(70);
binarySearchTree.insert(60);
binarySearchTree.insert(50);
binarySearchTree.insert(40);

console.log(binarySearchTree);



