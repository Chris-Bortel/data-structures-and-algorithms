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

  peek() {
    if (this.top === null) {
      return 'exception';
    } else {
      return this.top;
    }
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

// Queueu

class Queue {
  constructor() {
    this.storage = [];
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let node = new Node(value);
    this.storage[this.tail] = node;
    this.tail++;
  }

  dequeue() {
    let removedNode = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removedNode;
  }

  peek() {
    return this.storage[this.tail];
  }

  isEmpty() {
    if (this.storage) {
      return true;
    } else {
      return false;
    }
  }


}


module.exports = Stack;
module.exports = Queue;
