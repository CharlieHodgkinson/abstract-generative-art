let y = 0;
let direction = "^";

const minYchange = -10; //these two ranges determine line overlap and width
const maxYchange = 50;
const layers = 1;
const rotStripe = 0; //rotation of each stripe; try 10 or 90;
// try lines = true with high alpha or lines = false with low alpha (100)
const outlines = true;
const alpha = 255; //out of 255
const randomColors = false; //true = random color; false = color from palette table
const filling = true;
const outlineColoured = false; //false for black lines
const outlineWidth = 1; //line width
const numOfColors = 5; //5 in the pallet, add more for black or white
const outlineAlpha = 255; //out of 255 - used if numOfColors=1 & lines, filling, colorLines all true, low alpha, high outlineWidth
let r, g, b;
let table;

export const preload = (p5, parentRef) => {
  const canv = p5.createCanvas(200, 200).parent(parentRef);
  // canv.mousePressed((event) => {
  //   console.log("Clicked on the canvas. Event:", event);
  // });
  // console.log("preload");
  // table = p5.loadTable("colors.csv", "csv", "header", () => {
  //   console.log("table", table);
  // });
};

export const setup = (p5, parentRef) => {
  const canv = p5
    .createCanvas(p5.windowWidth, p5.windowHeight)
    .parent(parentRef);
  console.log("hello");
  if (outlines === true) {
    p5.stroke(0, 0, 0, outlineAlpha);
    p5.strokeWeight(outlineWidth);
  } else {
    p5.noStroke();
  }
  p5.angleMode(p5.DEGREES);
  let end = p5.height / 2 + 500; //where lines stop
  let palette = p5.floor(p5.random(676));
  for (let i = 0; i < layers; i++) {
    let y1;
    if (i === 0) {
      y1 = -p5.height / 2 - 300;
    } else {
      y1 = -p5.height / 2 + (p5.height / layers) * i;
    }
    //starting height for each layer
    let y2 = y1,
      y3 = y1,
      y4 = y1,
      y5 = y1,
      y6 = y1;
    let rotLayer = p5.random(359); //layer rotation
    let rotThisStripe = 0;
    //keep going until all the lines are at the bottom
    while (
      (y1 < end) &
      (y2 < end) &
      (y3 < end) &
      (y4 < end) &
      (y5 < end) &
      (y6 < end) &
      (-maxYchange < minYchange)
    ) {
      y1 += p5.random(minYchange, maxYchange);
      y2 += p5.random(minYchange, maxYchange);
      y3 += p5.random(minYchange, maxYchange);
      y4 += p5.random(minYchange, maxYchange);
      y5 += p5.random(minYchange, maxYchange);
      y6 += p5.random(minYchange, maxYchange);
      // if (randomColors === true) {
      r = p5.random(256);
      g = p5.random(256);
      b = p5.random(256);
      // } else {
      //   let col = p5.floor(p5.random(numOfColors));
      //   r = table.get(palette, col * 3);
      //   g = table.get(palette, col * 3 + 1);
      //   b = table.get(palette, col * 3 + 2);
      // }
      if (filling === true) {
        p5.fill(r, g, b, alpha);
      } else {
        p5.noFill();
      }
      if (outlineColoured === true) {
        p5.stroke(r, g, b, alpha);
      }
      p5.push();
      p5.translate(p5.width / 2, p5.height / 2);
      rotThisStripe += rotStripe; //rotating after each stripe
      p5.rotate(rotThisStripe + rotLayer);
      let xStart = -p5.width / 2;
      p5.beginShape();
      p5.curveVertex(xStart - 300, p5.height / 2 + 500);
      p5.curveVertex(xStart - 300, y1);
      p5.curveVertex(xStart + (p5.width / 5) * 1, y2);
      p5.curveVertex(xStart + (p5.width / 5) * 2, y3);
      p5.curveVertex(xStart + (p5.width / 5) * 3, y4);
      p5.curveVertex(xStart + (p5.width / 5) * 4, y5);
      p5.curveVertex(p5.width / 2 + 300, y6);
      p5.curveVertex(p5.width / 2 + 300, p5.height / 2 + 500);
      p5.endShape(p5.CLOSE);
      p5.pop();
      if (document.getElementById("defaultCanvas1")) {
        document.getElementById("defaultCanvas1").remove();
      }
    }
  }
};
