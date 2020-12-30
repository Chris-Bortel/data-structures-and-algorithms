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



  addBefore(newNode, target) {
    let current = this.head;
    let node = new Node(newNode);

    if (this.head.value === target ) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    while (current) {
      if (current.next.value === target) {
        node.next = target;
        current.next = node;
      }
      current = current.next;
    }

  }
}
let list = new LinkedList();

list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);

list.addBefore(4,9);

list.includes(4);

console.log(JSON.stringify(list, null, 2));
// console.log(list.insert(7));
// console.log(list.insert(8));
// console.log(list.insert(9));
// console.log(list.addBefore(4,9));
// console.log(list.includes(4));

// module.exports = Node, LinkedList;

