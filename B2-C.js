const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString = "";

rl.on("line", (input) => {
  inputString = input;
  rl.close();
});

rl.on("close", () => {
  console.log(getMinPrice(inputString));
});

function getMinPrice(input) {
  let price = 0;
  for (let i = 0; i < Math.floor(input.length / 2); i++) {
    const j = input.length - 1 - i;
    if (input[i] !== input[j]) price++;
  }
  return price;
}
