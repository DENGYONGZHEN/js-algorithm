/***
 *
 * "Prime number"（素数或质数）是指一个大于1的自然数，且除了1和它本身以外，没有其他正整数可以整除它的数。
 * 换句话说，素数只能被1和它自己整除。常见的素数有：
 * 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ...
 * 一些特点：
 * 2 是唯一的一个偶数素数，其他所有素数都是奇数。
 * 素数在数论中有着重要的地位，它们是构建所有自然数的基本“积木”。任何大于1的自然数都可以表示为素数的乘积，这个过程被称为“素因数分解”。
 * 例如：
 * 12 = 2 × 2 × 3
 * 30 = 2 × 3 × 5
 * 理解素数对数学、密码学（如RSA加密）等领域都有重要意义。
 */

const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("what is your number\r\n", (data) => {
  console.log(solutions(parseInt(data)));
  read.close();
});

const solutions = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
