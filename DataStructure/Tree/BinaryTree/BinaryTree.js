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

  inOrderTraversal() {
    if (this.root === null) return;
    let stack = [];
    let currentNode = this.root;
    while (currentNode || stack.length > 0) {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      currentNode = stack.pop();
      console.log(currentNode.value);
      currentNode = currentNode.right;
    }
  }

  inOrderRecursive(node = this.root) {
    if (!node) return;
    this.inOrderRecursive(node.left)
    console.log(node.value);
    this.inOrderRecursive(node.right)
  }


  postOrderTraversal() {
    let current = this.root;
    if (!current) return;
    let stack = [];
    let lastVisitedNode = null;

    while (current || stack.length > 0) {
      if (current) {
        stack.push(current);
        current = current.left
      }
      else {
        let peekNode = stack.at(-1);
        if (peekNode.right && lastVisitedNode !== peekNode.right) {
          current = peekNode.right
        }
        else {
          console.log(peekNode.value);
          lastVisitedNode = stack.pop();
        }
      }
    }
  }

  postOrderRecursive(node = this.root) {
    if (node) {
      this.postOrderRecursive(node.left);
      this.postOrderRecursive(node.right);
      console.log(node.value);
    }
  }

  search(target) {
    if (this.root === null) return;
    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();
      if (node.value === target) return true;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return false;
  }

  deleteDeepestNode() {
    if (!this.root) return;

    if (!this.root.left && !this.root.right) {
      this.root = null;
      return;
    }

    let queue = [this.root];
    let current, parent = null;

    while (queue.length > 0) {
      current = queue.shift();

      if (current.left) {
        parent = current;
        queue.push(current.left);
      }

      if (current.right) {
        parent = current;
        queue.push(current.right);
      }
    }

    if (parent.left === current) {
      parent.left = null;
    } else if (parent.right === current) {
      parent.right = null;
    }
  }

  deleteNode(value) {
    if (!this.root) return;

    let queue = [this.root];
    let currentNode, nodeToDelete, parentNode = null;

    // Level order traversal to find:
    // 1) node to delete
    // 2) deepest node (current)
    // 3) parent of deepest node

    while (queue.length > 0) {
      currentNode = queue.shift();

      if (currentNode.value === value) {
        nodeToDelete = currentNode;
      }

      if (currentNode.left) {
        parentNode = currentNode;
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        parentNode = currentNode;
        queue.push(currentNode.right)
      }

      if (nodeToDelete) {
        nodeToDelete.value = currentNode.value;

        if (currentNode === parentNode.right) {
          parentNode.right = null;
        } else if (currentNode === parentNode.left) {
          parentNode.left = null;
        }
      }
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
binaryTree.insert('N8')

binaryTree.deleteNode('N2')
console.log(JSON.stringify(binaryTree, null, 2));
// binaryTree.leverOrderTraversal();


