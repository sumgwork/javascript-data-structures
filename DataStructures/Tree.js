class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }


  }

  lookup(value) {
    if(!value || !this.root){
      return false;
    }

    let currentNode = this.root;
    while(currentNode){
      if(value === currentNode.value){
        return currentNode;
      } else if(value < currentNode.value){
        //left
        if(!currentNode.left){
          return false;
        }
        currentNode = currentNode.left
      } else  if(value > currentNode.value){
        //right
        if(!currentNode.right){
          return false;
        }
          currentNode = currentNode.right
      } 

    }
  }
}

function traverse(node) {
  if (!node) {
    return null;
  }
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

module.exports = { BinarySearchTree, traverse };