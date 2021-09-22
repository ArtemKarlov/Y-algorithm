const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArray = [];

rl.on("line", (input) => {
  inputArray = input.split(" ");
  rl.close();
});

rl.on("close", () => {
  console.log(getAnswer(inputArray));
});

function getAnswer(input) {
  const set = {};
  const result = [];

  input.forEach((element) => {
    if (!set[element]) {
      set[element] = 0;
    }
    set[element]++;
  });

  input.forEach((element) => {
    if (set[element] === 1) result.push(element);
  });

  return result.join(" ");
}
