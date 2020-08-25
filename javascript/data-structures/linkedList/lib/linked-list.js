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

    return this.head;
  }


  // Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

  // includes method loops through the values that I have inserted
  includes(findValue) {
    let current = this.head;
    // checking to see if the current node does not equal null
    while (current != null) {

      if(current.value === findValue) {
        console.log(true);
        return true;
      }
      current = current.next;
    }
    console.log(false);
    return false;
  }

  // Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
  toString() {
    let current = this.head;
    let string = '';

    while(current) {
      if (current !== null) {
        string = `${string} {${current.value}} -> `;
        current = current.next;
      }
      if (current === null) {
        string = string + 'NULL';
      }
    }
    console.log(string);
  }

}

module.exports = LinkedList;



