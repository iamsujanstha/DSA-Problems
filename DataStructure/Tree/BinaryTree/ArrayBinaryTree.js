class BinaryTree {
  constructor() {
    this.arr = [];
    this.lastUsedIndex = 0;
  }

  insert(element) {
    this.arr[this.lastUsedIndex + 1] = element;
    this.lastUsedIndex++;
  }

  leverlOrderTraversal() {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i]) {
        console.log(i, " ");
      }
    }
  }

  preOrderTraversal(index = 1) {
    if (index > this.lastUsedIndex || !this.arr[index]) {
      return;
    }
    console.log(this.arr[index], " ");

    this.preOrderTraversal(2 * index);
    this.preOrderTraversal(2 * index + 1);
  }
}

const binaryTree = new BinaryTree();

binaryTree.insert("N1");
binaryTree.insert("N2");
binaryTree.insert("N3");
binaryTree.insert("N4");
binaryTree.insert("N5");
binaryTree.insert("N6");
binaryTree.insert("N7");

binaryTree.preOrderTraversal();
console.log(binaryTree);