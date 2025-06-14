class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  leverOrderTraversal() {  // Time Complexity => O(n^2)
    if (this.root === null) return;
    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();  // It is O(n) after removing first element all the remaing element shift the index
      console.log(node.value);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  insert(value) {
    let newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let queue = [this.root];
    while (queue.length > 0) {
      let node = queue.shift();
      if (node.left === null) {
        node.left = newNode;
        return;
      }
      else {
        queue.push(node.left);
      }

      if (node.right === null) {
        node.right = newNode;
        return;
      }
      else {
        queue.push(node.right);
      }
    }
  }

  preOrderTraversal() {
    if (this.root === null) return;
    let stack = [this.root];
    while (stack.length > 0) {
      let node = stack.pop();
      console.log('PreOrderTraversal - ', node.value);

      if (node.right !== null) stack.push(node.right);
      if (node.left !== null) stack.push(node.left);
    }
  }

  preOrderRecursive(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderRecursive(node.left);
      this.preOrderRecursive(node.right);
    }
  }

}


const binaryTree = new BinaryTree();

binaryTree.insert('N1')
binaryTree.insert('N2')
binaryTree.insert('N3')
binaryTree.insert('N4')
binaryTree.insert('N5')
binaryTree.insert('N6')
binaryTree.insert('N7')

console.log(JSON.stringify(binaryTree, null, 2));
binaryTree.leverOrderTraversal();
binaryTree.preOrderRecursive();

