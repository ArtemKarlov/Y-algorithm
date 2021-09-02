const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCodes = [];

rl.on("line", (input) => {
  inputCodes.push(parseInt(input));
  if (inputCodes.length === 3) rl.close();
});

rl.on("close", () => {
  const [taskCode, interactorCode, checkerCode] = inputCodes;
  console.log(resultCode(taskCode, interactorCode, checkerCode));
});

function resultCode(taskCode, interactorCode, checkerCode) {
  switch (interactorCode) {
    case 0:
      return taskCode === 0 ? checkerCode : 3;
    case 1:
      return checkerCode;
    case 4:
      return taskCode === 0 ? 4 : 3;
    case 6:
      return 0;
    case 7:
      return 1;
    default:
      return interactorCode;
  }
}
