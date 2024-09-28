/**
 *
 * 选择排序
 *
 * 时间复杂度：O(n^2)
 */

const selectSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //如果最小值不是i，那么就进行交换
    if (minIndex !== i) {
      // 使用临时变量进行交换，更加清晰
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const result = selectSort([4, 6, 8, 2, 1, 9, 7, 5, 3]);
console.log(result);
