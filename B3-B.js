const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArray = [];

rl.on("line", (input) => {
  inputArray = input.trim().split(" ");
  rl.close();
});

rl.on("close", () => {
  logAnswer(inputArray);
});

function logAnswer(input) {
  const set = {};

  input.forEach((element) => {
    if (!set[element]) {
      set[element] = true;
      console.log("NO");
    } else {
      console.log("YES");
    }
  });
}
