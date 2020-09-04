'use strict';

const Node = require('./lib/node.js');

class LinkedList{
  constructor() {
    this.head = null;
  }

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

  includes(findValue) {
    let current = this.head;
    let result = findValue;
    while (current !== null) {
      if (current.value === findValue) {
        console.log(result, 'is in the linked list');
        return true;
      }
      current = current.next;
    }
    console.log(result, 'is in the linked list');
    return false;
  }

  // This was code challenge 09
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

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    let previous;

    while (current.next) {
      if (current.value === value) {
        let node = new Node(newValue);
        node.next = previous.next;
        previous.next = node;
        console.log('previous node: ', previous);
        return this;
      }
      previous = current;
      current = current.next;
    }
  }

  insertAfter (value, newValue) {
    let current = this.head;

    while (current.next) {
      if (current.value === value) {
        let node = new Node(newValue);
        let nextNode = current.next;
        current.next = node;
        node.next = nextNode;
        console.log('after node', node.next);
        return this;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;
