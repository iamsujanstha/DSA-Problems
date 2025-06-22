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

  inOrderTraversal(index = 1) {
    if (index > this.lastUsedIndex || !this.arr[index]) {
      return;
    }

    this.inOrderTraversal(2 * index);
    console.log(this.arr[index], " ");
    this.inOrderTraversal(2 * index + 1);
  }

  postOrderTraversal(index = 1) {
    if (index > this.lastUsedIndex || !this.arr[index]) {
      return;
    }

    this.postOrderTraversal(2 * index);
    this.postOrderTraversal(2 * index + 1);
    console.log(this.arr[index], " ");
  }

  search(element) {
    for (let i = 1; i < this.arr.length; i++) {
      if (element === this.arr[i]) {
        return i;
      }
    }
    return false;
  }

  delete(element) {
    let deepestElement = this.arr.at(-1);
    for (let i = 1; i < this.arr.length; i++) {
      if (element === this.arr[i]) {
        this.arr[i] = deepestElement;
        this.arr.pop();
      }
    }
    return `${element} not found!!`
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

binaryTree.postOrderTraversal();
binaryTree.delete("N2");

console.log(binaryTree);
