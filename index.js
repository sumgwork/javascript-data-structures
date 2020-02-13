// Importing Data Structures
const { LinkedList, DoublyLinkedList } = require("./DataStructures/LinkedList");
const { reverse, reverseModern, mergeSortedArrays } = require("./DataStructures/ArraysAndStrings");
const { HashTable } = require("./DataStructures/HashTable");
const {Stack, Stack2} = require("./DataStructures/Stack");
const {Queue} = require("./DataStructures/Queue");

// Importing Algorithms
const { firstRecurringCharacter } = require("./Algorithms/firstRecurringCharacter");

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



// // 9-->2-->5-->16
// const dll = new DoublyLinkedList(10);
// dll.append(5);
// dll.append(16);
// dll.prepend(9);
// dll.insert(2, 2);

// dll.remove(1);

// console.log(dll.printList());

// const reversed = dll.reverse();
// console.log(reversed);

// const text = "Hi, I am Sumit.";
// console.log(reverse(text));
// console.log(reverseModern(text));

// console.log(mergeSortedArrays([0,3,4,31],[4,6,30]));
// [0,3,4,4,6,30,31]


// const hashTable = new HashTable(10);
// hashTable.set('grapes', 1000);
// hashTable.set('apples', 50);
// hashTable.set('apples', 40);
// hashTable.get('grapes');
// hashTable.get('apples');
// hashTable.keys();

// firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
// firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2 ,4]);
// firstRecurringCharacter([2,3,4,5]);

// const stack = new Stack2();
// stack.push("Repl");
// stack.push("Udemy");
// stack.push("YouTube");

// stack.pop();
// stack.pop();

// stack.peek();
// stack.pop();
// stack.pop();
// stack.isEmpty();

const queue = new Queue();
queue.enqueue("Ayera");
queue.enqueue("Anisa");
queue.enqueue("Meenu");
queue.enqueue("Sumit");

queue.peek();
queue.dequeue();
queue.dequeue();
queue.peek();