const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArray = [];

rl.on("line", (input) => {
  inputArray.push(input.split(" ").map((i) => parseInt(i)));
  if (inputArray.length === 2) rl.close();
});

rl.on("close", () => {
  console.log(getAnswer(inputArray));
});

function getAnswer(input) {
  const [count, stacks] = input;
  let time = 0;
  stacks.sort((a, b) => a - b);
  for (let i = 0; i < stacks.length - 1; i++) {
    time += stacks[i];
  }
  return time;
}
