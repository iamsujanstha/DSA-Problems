class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CSLinkedList {
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
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
    this.length++;
  }

  toString() {
    let tempNode = this.head;
    let result = '';
    if (this.length <= 0) return false;
    for (let i = 0; i < this.length; i++) {
      result += tempNode.value;
      if (tempNode.next === this.head) {
        break;
      }
      if (tempNode) {
        result += '->'
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
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.tail.next = newNode;
    this.length++;
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      if (currentNode.next === this.head) {
        break;
      }
      currentNode = currentNode.next;
    }
  }

  search(target) {
    let tempNode = this.head;
    let index = 0;
    while (tempNode) {
      if (tempNode.next === this.head) {
        break;
      }
      if (tempNode.value === target) {
        return `${target} found at index ${index}`;
      }
      tempNode = tempNode.next;
      index++;
    }
    return `${target} not found!!`
  }

  get(index) {
    if (index < -1 || index > this.length) {
      return 'Invalid index';
    }
    if (index === -1 || index === this.length - 1) {
      return this.tail;
    }
    let targetNode = this.head;
    for (let i = 0; i < index; i++) {
      targetNode = targetNode.next;
    }
    return targetNode;
  }

  setValue(index, value) {
    let tempValue = this.get(index);
    if (tempValue) {
      tempValue.value = value;
      return true;
    }
  }

  popFirst() {
    if (this.length <= 0) return false;
    let poppedNode = this.head;
    this.head = poppedNode.next;
    this.tail.next = this.head;
    poppedNode.next = null;
    this.length--;
    return poppedNode;
  }

  pop() {
    if (this.length <= 0) return false;
    let poppedNode = this.tail;
    let tempNode = this.head;
    while (tempNode.next !== this.tail) {
      tempNode = tempNode.next;
    }
    tempNode.next = this.head;
    this.tail = tempNode;
    poppedNode.next = null;
    this.length--;
    return poppedNode;
  }

  remove(index) {
    if (index < -1 || index > this.length) return false;
    if (index === -1 || index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let popedNode = prevNode.next;
    prevNode.next = popedNode.next;
    popedNode.next = null;
    this.length--;

    return popedNode;
  }

  deleteAll() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const newLinkedList = new CSLinkedList();

newLinkedList.append(10);
newLinkedList.append(20);
newLinkedList.append(30);
newLinkedList.append(40);
newLinkedList.prepend(50)

newLinkedList.setValue(1, 200)
console.log(newLinkedList.toString())
// console.log(newLinkedList.search(330))
console.log(newLinkedList.pop());
console.log(newLinkedList.remove(-1))
newLinkedList.deleteAll();
console.log(newLinkedList)
console.log(newLinkedList.toString())
