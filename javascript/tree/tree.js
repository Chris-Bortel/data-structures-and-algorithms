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

  inOrder() {}

  postOrder() {}
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

console.log(tree.preOrder());
// console.log(JSON.stringify(tree, undefined, 4));

// // TODO: I will be writing that add function
// class BinarySearchTree extends BinaryTree() {
//   add(value) {
//     // accepts a value, and adds a new node with that value in the correct location in the binary search tree
//     // need to traverse through this thing
//   }

//   contains(value) {
//     //accepts a value and returns a boolean telling us whether or not the value is in the tree at least once
//   }
// }
