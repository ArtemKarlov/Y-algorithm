const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArray = [];

rl.on("line", (input) => {
  inputArray = input.split(" ").map((i) => parseInt(i));
  rl.close();
});

rl.on("close", () => {
  console.log(getMaxNearestDistance(inputArray));
});

function getMaxNearestDistance(array, form = 1, to = 2) {
  let maxDistance = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === form) {
      const leftMarketIndex = array.lastIndexOf(to, i);
      const leftMarketDistance = leftMarketIndex !== -1 ? i - leftMarketIndex : Infinity;
      const rightMarketIndex = array.indexOf(to, i);
      const rightMarketDistance = rightMarketIndex !== -1 ? rightMarketIndex - i : Infinity;

      maxDistance = Math.max(maxDistance, Math.min(leftMarketDistance, rightMarketDistance));
    }
  }
  return maxDistance;
}
