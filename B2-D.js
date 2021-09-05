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
  console.log(findFoots(inputArray));
});

function findFoots(input) {
  const benchLength = input[0][0];
  const foots = input[1];
  const benchCenter = benchLength / 2;
  let neededFoots = [];
  for (let i = 0; i < foots.length; i++) {
    if (foots[i] < benchCenter) {
      if (benchCenter - foots[i] < 1) {
        return foots[i];
      } else {
        neededFoots[0] = foots[i];
      }
    } else {
      neededFoots[1] = foots[i];
      return neededFoots.join(" ");
    }
  }
}
