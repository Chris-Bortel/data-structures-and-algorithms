'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    //creates new node
    if(this.top === null){
      this.top = node;
    }
    this.size ++;
  }

}

module.exports = Stack;
