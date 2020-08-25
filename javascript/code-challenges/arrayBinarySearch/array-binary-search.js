('use strict');
let array = [1,3,5,7,11,13,17,19];
let target = 13;
const binarySearch = ((array, target) => {
  let start = 0;
  let end = array.length -1;
  while(start <= end){
    let mid = Math.floor((start+end)/2);
    if(array[mid] === target){
      return mid;
    }
    if(array[mid] < target){
      start = mid +1;
    }
    else{
      end = mid -1;
    }
  }
  return -1;
});
console.log(binarySearch(array,target));
