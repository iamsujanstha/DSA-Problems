class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.end = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(element) {
    const newNode = new Node(element);
    if (this.length === 0) {
      this.front = newNode;
      this.end = newNode;
    }
    else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return 'Empty queue';
    const firstNode = this.front;
    this.front = firstNode.next;
    firstNode.next = null;
    this.length--;

    return firstNode;
  }

  peek() {
    return this.front;
  }

  clearAll() {
    this.front = null;
    this.end = null;
    this.length = 0;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.clearAll();
console.log(queue)