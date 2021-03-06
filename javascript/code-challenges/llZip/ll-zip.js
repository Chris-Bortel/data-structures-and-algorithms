"use strict";

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
  l1Current.next = l2Current;
  console.log(JSON.stringify(linkedList1, null, 2));
  return linkedList1;
};

module.exports = zipLists;
