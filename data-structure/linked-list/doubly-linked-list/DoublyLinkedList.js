class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  toString() {
    let currentNode = this.head;
    let result = '';

    while (currentNode) {
      result += currentNode.value;
      if (currentNode.next) result += ' <-> '
      currentNode = currentNode.next;
      this.length++;
    }
    return result;
  }

  prepend(value) {
    let newNode = new Node(value);
    let currentNode = this.head;

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      currentNode.prev = newNode;
      this.head = newNode;
      newNode.next = currentNode;
    }
  }

  traversal() {
    let tempNode = this.head;

    while (tempNode) {
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
  }

  reverseTraversal() {
    let tempNode = this.tail;

    while (tempNode) {
      console.log(tempNode.value);
      tempNode = tempNode.prev;
    }
  }

  search(target) {
    let tempNode = this.head;
    if (this.length === 0) return 'Linked List is empty'
    for (let i = 0; i < this.length; i++) {
      if (tempNode.value === target) {
        return `${target} found at index ${i}`
      }
      tempNode = tempNode.next;
    }
    return 'Not Found!!'
  }

  get(index, options = { returnValue: false }) {
    if (this.length === 0) return null;

    if (index === -1 || index === this.length) {
      return options.returnValue ? this.tail.value : this.tail;
    }

    if (index < 0 || index >= this.length) return null;

    let currentNode;
    let mid = Math.floor(this.length / 2);

    if (index < mid) {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }

    return options.returnValue ? currentNode.value : currentNode;
  }


  setValue(index, value) {
    let targetNode = this.get(index);
    if (targetNode) {
      targetNode.value = value;
    }
    return false;
  }
}

const newDLL = new DoublyLinkedList();

newDLL.append(10)
newDLL.append(20)
newDLL.append(30)

console.log(newDLL.setValue(1, 400))
console.log(newDLL.toString())