'use strict';

const Node = require('./node.js');

class LinkedList{
  constructor() {
    this.head = null;
  }

  // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  // includes

  // insert method 
  insert(insertValue) {
    let node = new Node(insertValue);

    node.next = this.head;
    //new instance of the node constructor that I am bringing in
    this.head = node;

    return insertValue;
  }
  

  //
}

module.exports = LinkedList;



