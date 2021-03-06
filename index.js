// Importing Data Structures
const { LinkedList, DoublyLinkedList } = require("./DataStructures/LinkedList");
const { reverse, reverseModern, mergeSortedArrays } = require("./DataStructures/ArraysAndStrings");
const { HashTable } = require("./DataStructures/HashTable");
const {Stack, Stack2} = require("./DataStructures/Stack");
const {Queue} = require("./DataStructures/Queue");

// Importing Algorithms
const { firstRecurringCharacter } = require("./Algorithms/firstRecurringCharacter");

const {BinarySearchTree, traverse} = require("./DataStructures/Tree");
const {Graph} = require("./DataStructures/Graph");

const {factorial, fibonacci, reverseString} = require("./Algorithms/recursiveFunctions");

const {bubbleSort,selectionSort,insertionSort} = require("./Algorithms/sorting");
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

// const queue = new Queue();
// queue.enqueue("A");
// queue.enqueue("a");
// queue.enqueue("M");
// queue.enqueue("S");

// queue.peek();
// queue.dequeue();
// queue.dequeue();
// queue.peek();

// const bst = new BinarySearchTree();
// bst.insert(9);
// bst.insert(4);
// bst.insert(1);
// bst.insert(20);
// bst.insert(170);
// bst.insert(6);
// bst.insert(15);

// console.log(JSON.stringify(traverse(bst.root)));

// bst.lookup(15);

/*     9
    4    20
  1  6  15  170
  */


// const graph = new Graph();
// graph.addVertex('0');
// graph.addVertex('1');
// graph.addVertex('2');
// graph.addVertex('3');
// graph.addVertex('4');
// graph.addVertex('5');
// graph.addVertex('6');

// graph.addEdge('3','1');
// graph.addEdge('3','4');
// graph.addEdge('4','2');
// graph.addEdge('4','5');
// graph.addEdge('1','2');
// graph.addEdge('1','0');
// graph.addEdge('0','2');
// graph.addEdge('6','5');

// graph.showConnections();

// factorial(10);
// fibonacci(8);
// reverseString('sumit');
const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket = [2,65,34,2,1,7,8];

// bubbleSort(basket);
// selectionSort(basket);
insertionSort(basket);