/**
 *
 *
 * Fibonacci 是指斐波那契数列（Fibonacci sequence），它是一个在数学中非常著名的数列。
 * 这个数列的特点是：从第三项开始，每一项的值都是前两项之和。斐波那契数列通常以以下形式表示：
 *
 * 第一项：0（有时也可以从1开始）
 * 第二项：1
 * 第三项及以后：每一项都等于前两项之和
 * 具体来说，斐波那契数列的前几项是：
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 公式化表示的话，第 n 项的斐波那契数可以表示为：
 * F(n)=F(n−1)+F(n−2)
 * 其中，
 * F(1)=1。
 * 斐波那契数列在许多自然现象中也有应用，例如植物叶子的排列、兔子繁殖的问题等。
 *
 */

const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
read.question("what is your number\r\n", (data) => {
  console.log("result is :", solution(parseInt(data)));
  read.close();
});

const solution = (num) => {
  if (num === 0) return [0];
  const arr = [0, 1];
  if (num === 1) return arr;
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
};
