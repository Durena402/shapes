const readlineSync = require("readlineSync")

let shape = question.readlineSync("\nEnter a shape: ");
shape = shape.lowerCase;

while (shape !== circle || shape !== rectangle || shape !== square || shape !== triangle){
  shape =read.linesync("\nEnter a shape:");
}

if( shape == circle){
  let radius = (Number.readlineSync("\nEnter Radius: "));
  let area = (radius * radius) * Math.pi;
  console.log("\nArea= " + area);
}

if( shape == rectangle){
  let length = (Number.readlineSync("\nEnter length: "));
  let width = (Number.readlineSync("\nEnter width: "));
  let rec = length * width;
  console.log("\nArea= " + rec);
}
if( shape == square){
  let side = (Number.readlineSync("\nEnter side: "));
  let sq = side * side;
  console.log("\nArea= " + sq);
}
if( shape == traingle){
  let base = (Number.readlineSync("\nEnter base: "));
  let height = (Number.readlineSync("\nEnter height: "));
  let tr = (base * height) / 2;
  console.log("\nArea= " + sq);
}
