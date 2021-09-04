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
  console.log(handleInput(inputString));
});

function handleInput(inputString) {
  const [x, y, z] = inputString.split(" ").map((input) => parseInt(input));
  return x > 12 || y > 12 || x === y ? 1 : 0;
}
