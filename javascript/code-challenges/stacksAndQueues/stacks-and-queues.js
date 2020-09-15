'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    //creates new node
    if(this.top === null){
      this.top = node;
    } else {
      let oldTop = this.top;
      node.next = oldTop;
    }
    this.size ++;
  }

  // Pop is not functioning as expected
  pop() {
    if(this.size > 0) {
      this.size --;
      let top = this.top;
      this.top = this.top.next;
      return top.Value;

    } else {
      return 'exception';
    }
  }
}

module.exports = Stack;
