"use strict";

// TODO: Retype the binary tree and then build the add function.
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

  preOrder() {
    let results = [];

    const _traverse = (node) => {
      results.push(node.value);
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
    };

    _traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    const _traverse = (node) => {
      if (node.left) {
        _traverse(node.left);
      }
      results.push(node.value);
      if (node.right) {
        _traverse(node.right);
      }
    };

    _traverse(this.root);
    return results;
  }

  // PostOrder looks at the right side of the tree
  postOrder() {
    let results = [];

    const _traverse = (node) => {
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
      results.push(node.value);
    };

    _traverse(this.root);
    return results;
  }
}

// // TODO: I will be writing that add function
class BinarySearchTree extends BinaryTree {
  add(value) {
    // make a new node
    // traverse and put node in the right spot
    const newNode = new Node(value);

    const _traverse = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
          return newNode;
        }
        _traverse(node.left);
      }
      if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
          return newNode;
        }
        _traverse(node.right);
      }
    };
  }

  contains(value) {
    while (this.root) {
      if (this.root === value) return true;
      if (value > this.root) {
        this.root = this.right;
      } else if (value < this.root) {
        this.root = this.left;
      } else {
        return false;
      }
    }
  }
}

let twenty = new Node(20);
let twelve = new Node(12);
let six = new Node(6);
let seventeen = new Node(17);
let thirtytwo = new Node(32);
let twentyfive = new Node(25);
let fourty = new Node(40);
let seventy = new Node(70);

twenty.left = twelve;
twenty.right = thirtytwo;
twelve.left = six;
twelve.right = seventeen;
thirtytwo.right = fourty;
thirtytwo.left = twentyfive;
fourty.right = seventy;

let tree = new BinaryTree(twenty);
let searchTree = new BinarySearchTree();

console.log(searchTree.add());

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
