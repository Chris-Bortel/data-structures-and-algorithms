'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Last in First Out
class Stacks {

  constructor () {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);

    if(!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    return this;
  }

  pop() {
    if(!this.top) {
      // console.error('ERROR: THERE IS NOTHING TO POP');
      return null;
    } else {
      let poppedItem = this.top;
      this.top = this.top.next;
      return poppedItem.value;
    }
  }

  peek(){
    if(!this.top) {
      // console.error('ERROR: STACK IS EMPTY');
      return null;
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}



module.exports = Stacks;