class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
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
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  popFirst() {
    if (this.length === 0) return null;

    const removed = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }
    this.length--;
    return removed.value;
  }

  pop() {
    if (this.length === 0) return null;

    const removed = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    this.length--;
    return removed.value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
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
    return true;
  }

  delete(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.popFirst();
    if (index === this.length - 1) return this.pop();

    const nodeToRemove = this.get(index);
    const prevNode = nodeToRemove.prev;
    const nextNode = nodeToRemove.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;
    return nodeToRemove.value;
  }

  toString() {
    if (this.length === 0) return '';
    let tempNode = this.head;
    let result = '';
    for (let i = 0; i < this.length; i++) {
      result += tempNode.value;
      if (i !== this.length - 1) result += ' <-> ';
      tempNode = tempNode.next;
    }
    return result;
  }

  traverse() {
    if (this.length === 0) return null;
    let tempNode = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
  }

  search(target) {
    if (this.length === 0) return 'Empty Linked List';
    let tempNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (tempNode.value === target) {
        return `${target} found at index ${i}`;
      }
      tempNode = tempNode.next;
    }
    return `${target} not found!!`;
  }

  get(index) {
    if (this.length === 0) return 'Empty Linked List';
    if (index < 0 || index >= this.length) return 'Invalid index';

    let currentNode;
    let mid = Math.floor(this.length / 2);

    if (index <= mid) {
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

    return currentNode;
  }

  setValue(index, value) {
    const currentNode = this.get(index);
    if (currentNode instanceof Node) {
      currentNode.value = value;
      return true;
    }
    return false;
  }
}


const list = new CircularDoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);  // [5, 10, 20, 30]

console.log("Initial:", list.toString());

list.insert(2, 15); // Insert 15 at index 2 -> [5, 10, 15, 20, 30]
console.log("After insert:", list.toString());

console.log("Deleted:", list.delete(3)); // Deletes 20
console.log("After delete:", list.toString());

console.log("Popped:", list.pop()); // Deletes 30
console.log("Popped First:", list.popFirst()); // Deletes 5
console.log("After pops:", list.toString());
