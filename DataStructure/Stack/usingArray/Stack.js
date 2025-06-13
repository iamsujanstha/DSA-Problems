class Stack {
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item);
  }

  toString() {
    if (this.isEmpty()) return 'Stack is empty!!'
    return [...this.items].reverse().join('\n')
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    if (this.isEmpty()) return 'Stack is empty!!';
    return this.items.pop();
  }

  peek() {
    return this.items.at(-1);
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}


const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.toString())
console.log('Popped Item', stack.pop())
console.log(stack.toString())
console.log('Last item', stack.peek());
console.log('Size of stack', stack.size());
stack.clear();
console.log(stack.toString())
