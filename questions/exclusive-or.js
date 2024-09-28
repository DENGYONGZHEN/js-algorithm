/**
 *
 * 在一个数组中，有一个数出现单数次，其他数都出现偶数次。找出这个数。
 *
 *
 *
 */

function solution(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }

  return result;
}

console.log(solution([1, 2, 1, 2, 5, 4, 4, 5, 6, 6, 6, 6, 8]));

/**
 *
 * 在一个数组中，有两个数出现单数次，其他数都出现偶数次。找出这两个数。
 *
 */

function findTwoOddNumbers(arr) {
  // Step 1: XOR all elements to get the XOR result of the two odd occurring numbers
  let xorResult = 0;
  for (let num of arr) {
    xorResult ^= num;
  }

  // Step 2: Find the rightmost set bit (1) in xorResult
  //xorResult 和 -xorResult 在最低的 1 位相同，其他所有高位不同。
  //在计算机中，负数是用 补码 表示的。补码的计算方法是：
  //对一个数的二进制表示按位取反，然后加 1。
  //例如 rightmostSetBit = 000000010
  let rightmostSetBit = xorResult & -xorResult; // This isolates the lowest set bit

  let num1 = 0,
    num2 = 0;

  // Step 3: Divide the numbers into two groups and XOR separately
  for (let num of arr) {
    if (num & rightmostSetBit) {
      // The bit at rightmostSetBit position is 1
      num1 ^= num;
    } else {
      // The bit at rightmostSetBit position is 0
      num2 ^= num;
    }
  }

  // num1 and num2 are the two numbers that appear odd times
  return [num1, num2];
}

// Example usage
const arr = [4, 3, 4, 4, 5, 5, 3, 6];
const result = findTwoOddNumbers(arr);
console.log(result); // Output will be the two numbers that appear odd times
