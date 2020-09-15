'use strict';

const Stack = require('../stacks-and-queues.js');

// describe()
it('can successfully push into a stack', () => {
  let stack = new Stack();
  stack.push(4);
  expect(stack.top.value).toBe(4);
});


