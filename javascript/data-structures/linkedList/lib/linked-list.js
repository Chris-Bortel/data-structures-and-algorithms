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
      while (current.next) {
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

  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while (current.next) {
      if (current.value === value) {

        let node = new Node(newVal);
        node.next = previous.next;
        previous.next = node;
        console.log('previous node: ', previous);
        return this;
      }
      previous = current;
      current = current.next;
    }
  }

  includes(findValue) {
    let current = this.head;
    let result = findValue;
    while (current != null) {
      if (current.value === findValue) {
        console.log(result, 'is in the linked list');
        return true;
      }
      current = current.next;
    }
    console.log(result, 'is in the linked list');
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      if (current !== null) {
        string = `${string} {${current.value}} -> `;
        current = current.next;
      }
      if (current === null) {
        string = `${string} ${null}`;
      }
    }
    console.log(string);
  }


}







module.exports = LinkedList;



