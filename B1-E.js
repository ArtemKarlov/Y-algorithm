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
  console.log(getResult(inputArray));
});

function getResult(input) {
  const [d, x] = formatInput(input);
  if (isPointInside(d, x)) return 0;
  return getNearestVertex(d, x);
}

function formatInput(input) {
  const d = parseInt(input[0]);
  const [x, y] = input[1].split(" ").map((i) => parseInt(i));
  return [d, { x, y }];
}

function isPointInside(d, { x, y }) {
  if (x < 0 || x > d || y < 0 || y > d) return false;
  if (d - x >= y) return true;
}

function getNearestVertex(d, x) {
  let nearestVertex = null;
  let minDistance = Infinity;
  const points = [
    { x: 0, y: 0 },
    { x: d, y: 0 },
    { x: 0, y: d },
  ];
  points.forEach((point, index) => {
    const distance = calculateDistance(x, point);
    if (distance < minDistance) {
      minDistance = distance;
      nearestVertex = index + 1;
    }
  });
  return nearestVertex;
}

function calculateDistance(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}
