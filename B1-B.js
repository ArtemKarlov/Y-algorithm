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
  getMinCount(inputString);
});

function getMinCount(inputString) {
  const inputNumArr = inputString.split(" ").map((input) => parseInt(input));
  const minCount = getMinInterval(inputNumArr) - 1;
  console.log(minCount);
}

function getMinInterval([n, i, j]) {
  const internal = i < j ? j - i : i - j;
  const external = n - internal;
  return internal < external ? internal : external;
}
