/**
 *
 * "Power of two"（二的幂）是指以2为底数的指数运算结果，
 * 一些特点：
 * "Power of two" 的数字在计算机科学中非常重要，因为计算机的底层操作（如内存大小、数据块、位操作）通常使用2的幂。
 *二的幂在二进制表示中具有特殊性，它们都只包含一个1，其余全是0。例如：
 * 8 在二进制中表示为 1000
 * 32 在二进制中表示为 100000
 * 了解 "power of two" 对于理解计算机架构、数据结构和算法等领域非常有用。
 */

const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("what is your number\r\n", (data) => {
  console.log(solution(parseInt(data)));
  console.log(isPowerOfTwoOptimize(parseInt(data)));
  read.close();
});

const solution = (number) => {
  let result = 2;
  if (number === 0) return 1;
  if (number > 0) {
    result = 2;
    while (number > 1) {
      result *= 2;
      number--;
    }
  }
  if (number < 0) {
    result = 1;
    while (number < 0) {
      result /= 2;
      number++;
    }
  }
  return result;
};

const isPowerOfTwo = (number) => {
  if (number === 1) return true;
  while (number > 1) {
    if (number % 2 !== 0) {
      return false;
    }
    number = number / 2;
  }
  return true;
};

const isPowerOfTwoOptimize = (number) => {
  if (number < 1) return false;
  return (number & (number - 1)) === 0;
};
