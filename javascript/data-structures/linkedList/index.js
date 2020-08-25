'use strict';

const LinkedList = require('./lib/linked-list.js');
let list = new LinkedList();

list.insert('cool value one');
list.insert('not cool value one');
list.insert(3);
list.insert(10);
list.insert(12);

list.append(1);


list.includes(3); // this should return true because it is in the list
list.includes(2);

list.toString();
console.log('This is my constucted list:', list);

list.insertBefore(3, 'this is my before value');

list.insertAfter(12, 'after 12');

//   insertBefore(value, newVal) {
//     let current = this.head;
//     let previous;
//     while (current.next) {
//       if (current.value === value) {
//         let node = new Node(newVal);
//         node.next = previous.next;
//         previous.next = node;
//         console.log('previous: ', previous);
//         return this;
//       }
//       previous = current;
//       current = current.next;
//     }
//   }