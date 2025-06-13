class Queue {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  enqueue(element) {
    this.items.push(element);
    this.length++;
  }

  dequeue() {
    this.items.shift();
    this.length--
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
    this.length = 0;
  }
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.dequeue();

queue.clear();

console.log(queue)