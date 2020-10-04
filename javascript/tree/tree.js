"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  preOrder() {}

  inOrder() {}

  postOrder() {}
}

class BinarySearchTree extends BinaryTree() {
  add(value) {
    // accepts a value, and adds a new node with that value in the correct location in the binary search tree
    // need to traverse through this thing
  }

  contains(value) {
    //accepts a value and returns a boolean telling us whether or not the value is in the tree at least once
  }
}
