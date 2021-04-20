'use strict';

const Stack = require('../../dsa-practice/stacks/index.js');

function multiBracketValidation(string) {
  let stack = new Stack();
  let openBrackets = {
    '(': ')',
    '{': ')',
    '[': ']',
  };
  let closingBrackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < string.length; i++) {
    if (openBrackets[string[i]]) {
      stack.push(string[i]);
    } else if (closingBrackets[string[i]]) {
      let popped = stack.pop();
      if (popped !== closingBrackets[string[i]]) {
        return false;
      }
    } else {
      continue;
    }
  }

  return stack.isEmpty();
}

module.exports = multiBracketValidation;
