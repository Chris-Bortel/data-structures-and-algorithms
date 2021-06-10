'use strict';

//basic hash function

function hash(key, arrayLen) {
  let total = 0;
  // prime numbers reduce the number of collisions exponentially
  let WEIRD_PRIME = 31;
  // set map so that we only set the first 100 characters
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    // map 'a' to 1, 'b' to 2, 'c' to 3, and so on
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  // console.log(total);
  return total;
}

hash('pink', 10);
hash('orange', 10);
hash('cyan', 10);
