function insertionSort(int) {
  const arr = int.slice();
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
console.log(insertionSort([8, 4, 23, 42, 16, 15]));
console.log(insertionSort([20, 18, 12, 8, 5, -2]));
console.log(insertionSort([2, 3, 5, 7, 13, 11]));
