const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let max = 0;
let count = 0;

rl.on("line", (input) => {
  const num = parseInt(input);
  if (num === 0) rl.close();
  else if (num === max) count++;
  else if (num > max) {
    max = num;
    count = 1;
  }
});

rl.on("close", () => {
  console.log(count);
});
