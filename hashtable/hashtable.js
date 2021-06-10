'use strict';

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  //basic hash function
  _hash(key) {
    let total = 0;
    // prime numbers reduce the number of collisions exponentially
    let WEIRD_PRIME = 31;
    // set map so that we only set the first 100 characters
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // map 'a' to 1, 'b' to 2, 'c' to 3, and so on
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }
  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // TODO: I would like to add some logic to alert the user if the key has already contains that key and in now nested
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    // hash to get an index, if nothing there return undefined, otherwise we loop over every item in the array at that index and check for the value we are looking for. if the key that we are looking for at the index at 1 matches, then we return that value
    let index = this._hash(key);
    if (this.keyMap[index]) {
      // loops over the array and returns the entire sub array at the items index
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            // checking to see if the values we are pushing already exist. if they do, we do not push them
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    console.log(keysArr);
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            // checking to see if the values we are pushing already exist. if they do, we do not push them
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    console.log(valuesArr);
    return valuesArr;
  }
}

let ht = new HashTable();
ht.set('hello world', 'goodbye cruel world');
ht.set('dogs', 'are cool');
ht.set('dogs', 'so cool');
ht.set('dogs', 'so cool');
ht.set('dogs', 'so cool');
ht.set('dogs', 'amazing');
ht.set('cats', 'are not that cool');
ht.set('I love', 'lamp');

// TODO: Why is this only returning the first dogs?
// ht.get('dogs');
// ht.get('dogsdfs');
ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
ht.values();
console.log(ht);

// hash('pink', 10);
// hash('orange', 10);
// hash('cyan', 10);
