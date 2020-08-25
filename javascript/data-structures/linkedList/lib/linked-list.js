'use strict';

const Node = require('./node.js');

class LinkedList{
  constructor() {
    this.head = null;
  }

  // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  // includes
  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }


  // insert method
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  includes(findValue) {
    let current = this.head;
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

//   insertBefore(value) {
//   let current = this.head;
//   let priorNode;

//   //   node.next = this.head;
//   //   //new instance of the node constructor that I am bringing in
//   //   this.head = node;

//   //   return this.head;
//   // }

//   // insertAfter() {

//   // }



//   // Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:


// }

module.exports = LinkedList;



