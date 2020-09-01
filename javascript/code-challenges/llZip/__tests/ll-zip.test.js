'use strict';

let zipLists = require('../ll-zip.js');
const Node = require('../../../data-structures/linkedList/lib/node.js');

const LinkedList = require('../../../data-structures/linkedList/lib/linked-list.js');

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();

// declare some nodes
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// const six = new Node(6);

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
    expect(zippedLists.head.next.value).toEqual(2);
  });

});



