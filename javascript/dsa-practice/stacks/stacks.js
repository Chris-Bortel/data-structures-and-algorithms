'use strict';

const Stack = require ('./index.js');

let familyStack = new Stack();

familyStack.push('John');
familyStack.push('Cathy');
familyStack.push('Zachary');
familyStack.push('Allie');

console.log('Iterative Traversal');

// TODO: Given a stack of such and such, I want you to do xyz to it === 
// // // This is how I am going to start

while (familyStack.peek()){
  // Process
  let person = familyStack.pop();
  console.log(person);
}

