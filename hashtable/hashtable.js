'use strict';

//basic hash function

function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map 'a' to 1, 'b' to 2, 'c' to 3, and so on
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  // console.log(total);
  return total;
}

hash('pink', 10);
hash('orange', 10);
hash('blue', 10);
