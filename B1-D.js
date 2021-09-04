const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArray = [];

rl.on("line", (input) => {
  inputArray.push(input);
  if (inputArray.length === 2) rl.close();
});

rl.on("close", () => {
  console.log(handleInput(inputArray));
});

function handleInput(inputArray) {
  const coords = inputArray[1].split(" ").map((input) => parseInt(input));
  return getMedian(coords);
}

function getMedian(array) {
  const m = array.length / 2;
  if (Number.isInteger(m)) {
    return Math.ceil((array[m - 1] + array[m]) / 2);
  } else {
    return array[Math.floor(m)];
  }
}
