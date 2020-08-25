'use strict';

const LinkedList = require('./lib/linked-list.js');
let list = new LinkedList();

list.insert('cool value one');
list.insert('not cool value one');
list.insert(3);

list.includes(3); // this should return true because it is in the list
list.includes(2);

list.toString();
console.log('This is my constucted list:', list);
