const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("what is your number\r\n", (data) => {
  const arr = Array.from({ length: parseInt(data) }).fill(0);
  console.log(solutions(parseInt(data), arr));
  read.close();
});

const solutions = (number) => {
  if (number === 0) return 0;
  if (number === 1) return 1;
  const value = solutions(number - 1) + solutions(number - 2);

  return value;
};
