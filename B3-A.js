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
  let count = 0;

  const set1 = {};
  for (let i = 0; i < input[0].length; i++) {
    const item = input[0][i];
    if (!set1[item]) set1[item] = true;
  }

  for (let i = 0; i < input[1].length; i++) {
    const item = input[1][i];
    if (set1[item]) count++;
  }

  return count;
}
