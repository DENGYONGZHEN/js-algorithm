/***
 *
 * "Factorial of a number" 是指一个正整数的阶乘。阶乘是从该整数一直乘到1的积。例如：
 * 5的阶乘（用符号5!表示）就是：
 * 5!=5×4×3×2×1=120
 * 3的阶乘（用符号3!表示）就是：
 * 3!=3×2×1=6
 * 阶乘的计算在数学中尤其是组合数学中有广泛的应用。通常，0的阶乘定义为1，即0! = 1。
 */

const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
read.question("what is your number\r\n", (data) => {
  console.log("result is :", solutions(parseInt(data)));
  read.close();
});

const solutions = (number) => {
  if (number === 0 || number === 1) return 1;
  let result = number;
  while (number > 1) {
    result *= --number;
  }

  return result;
};
