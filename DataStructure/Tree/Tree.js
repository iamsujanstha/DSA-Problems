class Node {
  constructor(value) {
    this.value = value;
    this.children = []; // each node can have children
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  removeChild(childNode) {
    const index = this.children.findIndex((child) => child === childNode);

    if (index !== -1) {
      this.children.splice(index, 1)
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

const tree = new Tree();

// Create root node
const rootNode = new Node('root');
tree.root = rootNode;

// Create child nodes
const child1 = new Node('child1');
const child2 = new Node('child2');

// Add child1 and child2 to root
rootNode.addChild(child1);
rootNode.addChild(child2);

// Add grandchildren
const grandchild1 = new Node('grandchild1');
const grandchild2 = new Node('grandchild2');

child1.addChild(grandchild1);
child1.addChild(grandchild2);

child1.removeChild(grandchild1)

// Output the entire tree JSON.stringify(value, replacer, space)
console.log(JSON.stringify(tree, null, 2));
