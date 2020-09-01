'use strict';
// const Node = require('./node.js');

// const LinkedList = require('../../data-structures/linkedList/lib/linked-list.js');

// let list = new LinkedList();
// // const zipList = 
const zipLists = (linkedList1, linkedList2) => {
  let l1Temp;
  let l2Temp;
  let l1Current = linkedList1.head;
  let l2Current = linkedList2.head;

  while (l1Current.next !== null) {
    l1Temp = l1Current.next;
    l2Temp = l2Current.next;
    l1Current.next = l2Current;
    l2Current.next = l1Temp;
    l1Current = l1Temp;
    l2Current = l2Temp;
  }
  console.log('line 22:::', linkedList1);
  return linkedList1;

};

module.exports = zipLists;
