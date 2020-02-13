class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implemented using LinkedList
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  dequeue() {
    if(!this.last){
      return undefined;
    }
    
    this.first = this.first.next;
    this.length--;
    if(this.length === 0){
      this.first = null;
      this.last = null
    }
    return this;
  }
  peek() {
    return this.first.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  isEmpty() {
    return !this.last;
  }
}

module.exports = { Queue }