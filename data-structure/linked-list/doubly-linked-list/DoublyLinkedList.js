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
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  toString() {
    let currentNode = this.head;
    let result = '';
    while (currentNode) {
      result += currentNode.value;
      if (currentNode.next) result += ' <-> ';
      currentNode = currentNode.next;
    }
    return result;
  }

  traversal() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  reverseTraversal() {
    let currentNode = this.tail;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.prev;
    }
  }

  search(target) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === target) return `${target} found at index ${index}`;
      currentNode = currentNode.next;
      index++;
    }
    return 'Not Found!!';
  }

  get(index, options = { returnValue: false }) {
    if (index < 0 || index >= this.length) return null;
    let currentNode;
    if (index < this.length / 2) {
      currentNode = this.head;
      for (let i = 0; i < index; i++) currentNode = currentNode.next;
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) currentNode = currentNode.prev;
    }
    return options.returnValue ? currentNode.value : currentNode;
  }

  setValue(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return 'Invalid index to insert';
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.length++;
  }

  popFirst() {
    if (this.length === 0) return 'Empty Linked List';
    const poppedNode = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode.value;
  }

  pop() {
    if (this.length === 0) return 'Empty Linked List';
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode.value;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return 'Invalid index';
    if (index === 0) return this.popFirst();
    if (index === this.length - 1) return this.pop();

    const targetNode = this.get(index);
    const prev = targetNode.prev;
    const next = targetNode.next;

    prev.next = next;
    next.prev = prev;

    targetNode.next = null;
    targetNode.prev = null;

    this.length--;
    return targetNode.value;
  }

  deleteAll() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}


const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log(list.toString()); // 10 <-> 20 <-> 30 <-> 40 <-> 50

list.remove(2); // removes 30
console.log(list.toString()); // 10 <-> 20 <-> 40 <-> 50

list.insert(1, 300);
console.log(list.toString()); // 10 <-> 300 <-> 20 <-> 40 <-> 50

list.pop();
console.log(list.toString()); // 10 <-> 300 <-> 20 <-> 40

list.deleteAll()
console.log(list)