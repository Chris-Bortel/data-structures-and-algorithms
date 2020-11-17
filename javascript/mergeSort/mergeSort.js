'use strict';


const arr = [8,4,23,42,16,15];
function Mergesort(arr) {
  const n = arr.length;

  if (n > 1) {
    const middleIndex = n % 2;
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex, n);
  }
  return (

    Mergesort(leftArr), Mergesort(rightArr)
  );

}

function Merge(leftArr, rightArr, arr) {
  const leftIndex = 0;
  const j = 0;
  const k = 0;

  while (leftIndex < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[leftIndex];
      let leftIndex = leftIndex++;
    } else {
      arr[k] = rightArr[j];
      let j = j++;
    }
  }
}



