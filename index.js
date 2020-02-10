const {LinkedList, DoublyLinkedList} = require("./LinkedList");

// const ll = new LinkedList(10);
// ll.append(5);
// ll.append(16);
// ll.prepend(1);
// ll.insert(0, 99);
// ll.insert(5, 23);
// ll.insert(1, 19);
// console.log(ll.printList());
// ll.remove(3);
// console.log(ll.printList());



// 9-->2-->5-->16
const dll = new DoublyLinkedList(10);
dll.append(5);
dll.append(16);
dll.prepend(9);
dll.insert(2, 2);

dll.remove(1);

console.log(dll.printList());

const reversed = dll.reverse();
console.log(reversed);
