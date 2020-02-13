class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implemented using LinkedList
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  pop() {
    if(!this.top){
      return undefined;
    }

    
    const value = this.top.value;
    this.top = this.top.next;
    this.length--;
    if(this.length === 0){
      this.top = null;
      this.bottom = null
    }
    return value;
  }
  peek() {
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.bottom = newNode;
      newNode.next = null;

    } else {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length++;


  }

  isEmpty() {
    return !this.top;
  }
}

// Implemented using Arrays
class Stack2 {
  constructor(){
    this.stack = [];
  }

  push(value){
    this.stack.push(value);
    return this.stack;
  }

  pop(){
    const value = this.stack[this.stack.length-1];
    this.stack.pop();
    return value;
  }

  peek(){
    return this.stack[this.stack.length-1];
  }
}

module.exports = { Stack, Stack2}