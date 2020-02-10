class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class NewDoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value, next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new NewNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    } else {
      let newNode = new NewNode(value);
      let leader = this.traverseToIndex(index - 1);
      let holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
  }

  remove(index) {
    if (index > this.printList().length) {
      return this.printList();
    } else {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

class DoublyLinkedList {
  
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new NewDoublyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new NewDoublyNode(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      this.length++;
      return this.printList();
    } else {
      let newNode = new NewDoublyNode(value);
      let leader = this.traverseToIndex(index - 1);
      let follower = leader.next;
      leader.next = newNode;
      follower.prev = newNode;
      newNode.next = follower;
      newNode.prev = leader;
      this.length++;
      return this.printList();
    }
  }

  remove(index) {
    if (index > this.printList().length) {
      return this.printList();
    } else {
      const leader = this.traverseToIndex(index - 1);
      const follower = this.traverseToIndex(index + 1); //index !== length
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      follower.prev = leader;
      this.length--;
      return this.printList();
    }
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }

  printList() {
    const singlyLinkedList = new LinkedList();
    return singlyLinkedList.printList.call(this);
  }

  traverseToIndex(index) {
    const singlyLinkedList = new LinkedList();
    return singlyLinkedList.traverseToIndex.call(this, index);
  }
}

module.exports = {LinkedList, DoublyLinkedList};