'use strict';

let zipLists = require('../ll-zip.js');

const LinkedList = require('../../../linkedList');

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();

// Call the method that adds
linkedList1.append(1);
linkedList1.append(3);
linkedList1.append(5);
linkedList2.append(2);
linkedList2.append(4);
linkedList2.append(6);

describe('link lists zip tests', () => {
  it('expecting list to successfully zip', () => {
    let zippedLists = zipLists(linkedList1, linkedList2);
    console.log('line 30 tests::::', zippedLists);
    expect(zippedLists.head.value).toEqual(1);
    expect(zippedLists.head.next.value).toEqual(2);
    expect(zippedLists.head.next.next.value).toEqual(3);
    expect(zippedLists.head.next.next.next.value).toEqual(4);
    expect(zippedLists.head.next.next.next.next.value).toEqual(5);
    console.log(zippedLists.head.next.next.next.next);
    expect(zippedLists.head.next.next.next.next.next.value).toEqual(6);
  });

  // check for odd numbers
  // check to type
});


