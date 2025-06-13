class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      // Now this.tail is a Node object, so this.tail.next is safe to read or write
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  toString() {
    let tempNode = this.head;
    let result = '';
    while (tempNode !== null) {
      result += tempNode.value;
      if (tempNode.next !== null) {
        result += ' -> ';
      }
      tempNode = tempNode.next;
    }
    return result;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(value, index) {
    const newNode = new Node(value);

    if (index < -1 || index > this.length) {
      return false;
    }
    else if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else if (index === -1 || index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    else {
      let tempNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        tempNode = tempNode.next;
      }
      newNode.next = tempNode.next;
      tempNode.next = newNode;
    }
    this.length++;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  search(target) {
    let current = this.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  get(index) {
    let current = this.head;
    if (index > this.length || index < -1) return 'Invalid index';
    if (index === -1) return this.tail;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  setValue(index, value) {
    // let current = this.head;
    // if (index > this.length || index < -1) return 'Invalid index';
    // if (index === -1) return this.tail.value = value;
    // for (let i = 0; i < index; i++) {
    //   current = current.next;
    // }
    // current.value = value;
    let node = this.get(index);
    if (node) {
      node.value = value
      return true;
    }
    else return false;
  }

  popFirst() {
    const popedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = this.head.next;
      popedNode.next = null;
    }

    this.length--;
    return popedNode;
  }

  pop() {
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== this.tail) {
        tempNode = tempNode.next;
      }
      tempNode.next = null;
    }
    this.length--;
    return popedNode;
  }

  remove(index) {
    if (index === 0) {
      return this.popFirst();
    }
    if (index < -1 || index > this.length) {
      return 'Invalid index';
    }
    if (index === this.length - 1 || index === -1) {
      return this.pop();
    }
    const prevNode = this.get(index - 1);
    const poppedNode = prevNode.next;

    prevNode.next = poppedNode.next
    poppedNode.next = null;

    this.length--;
    return poppedNode;
  }

  deleteAll() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}


const newLinkedList = new LinkedList()
newLinkedList.append(10);
newLinkedList.append(20);
newLinkedList.append(30);

newLinkedList.prepend(40);

newLinkedList.insert(50, -1);

newLinkedList.setValue(3, 90);

// newLinkedList.popFirst();
// newLinkedList.pop();
console.log(newLinkedList.remove(-1))

// console.log(newLinkedList.search(40))
// console.log(newLinkedList.get(-1))
console.log(newLinkedList.toString())
// newLinkedList.deleteAll();
console.log(newLinkedList)

// Time Complexity: O(1)
// Space Complexity: O(1)