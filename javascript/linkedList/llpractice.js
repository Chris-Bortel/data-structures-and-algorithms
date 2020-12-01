'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    // we give a new node 
    let node = new Node(value);
    // we say that if there is not a head, we will assign this.head a node
    // if there is a head, we will traverse the list and 

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
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


  includes(searchValue) {
    if(!this.head) {
      return false;
    }
    let current = this.head;
    while(current) {
      if(current.value === searchValue) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{ ${current.value} } ->`;
      current = current.next;
    }
    return string += 'null';
  }


}

module.exports = Node, LinkedList;
