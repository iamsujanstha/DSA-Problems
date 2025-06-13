class Node {
  constructor(value) {
    this.top = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;  //here top means 'Head'
    this.length = 0;

    /* since we perform only at first so used Top only so skip Bottom */
    // this.bottom = newNode; // here bottom means 'Tail'
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    }
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    let poppedNode = this.top;
    if (poppedNode) {
      this.top = poppedNode.next;
      poppedNode.next = null;
      this.length--;
      return poppedNode;
    }
  }

  peek() {
    return this.top;
  }

  clearAll() {
    return this.items = [];
  }
}


const linkedListStack = new Stack()

linkedListStack.push(10);
linkedListStack.push(20);
linkedListStack.push(30);
linkedListStack.push(40);

console.log(linkedListStack.pop());

console.log(linkedListStack)
