/**
 * 插入排序
 */

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let focusNumber = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > focusNumber) {
        arr[j] = arr[j] ^ arr[j + 1];
        arr[j + 1] = arr[j] ^ arr[j + 1];
        arr[j] = arr[j] ^ arr[j + 1];
        focusNumber = arr[j];
      }
    }
  }
  return arr;
};

const result = insertionSort([4, 6, 8, 2, 1, 9, 7, 5, 3]);
console.log(result);
