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

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

console.log('in setup')

function setup() {
  
  let canv = createCanvas(windowWidth - 20, windowHeight - 20);
  canv.mousePressed(setup);
  if (outlines == true) {
    stroke(0, 0, 0, outlineAlpha);
    strokeWeight(outlineWidth);
  } else {
    noStroke();
  }
  angleMode(DEGREES);
  let end = height / 2 + 500; //where lines stop
  let palette = floor(random(676));
  for (let i = 0; i < layers; i++) {
    let y1;
    if (i == 0) {
      y1 = -height / 2 - 300;
    } else {
      y1 = -height / 2 + (height / layers) * i;
    }
    //starting height for each layer
    let y2 = y1,
      y3 = y1,
      y4 = y1,
      y5 = y1,
      y6 = y1;
    let rotLayer = random(359); //layer rotation
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
      y1 += random(minYchange, maxYchange);
      y2 += random(minYchange, maxYchange);
      y3 += random(minYchange, maxYchange);
      y4 += random(minYchange, maxYchange);
      y5 += random(minYchange, maxYchange);
      y6 += random(minYchange, maxYchange);
      if (randomColors == true) {
        r = random(256);
        g = random(256);
        b = random(256);
      } else {
        let col = floor(random(numOfColors));
        r = table.get(palette, col * 3);
        g = table.get(palette, col * 3 + 1);
        b = table.get(palette, col * 3 + 2);
      }
      if (filling == true) {
        fill(r, g, b, alpha);
      } else {
        noFill();
      }
      if (outlineColoured == true) {
        stroke(r, g, b, alpha);
      }
      push();
      translate(width / 2, height / 2);
      rotThisStripe += rotStripe; //rotating after each stripe
      rotate(rotThisStripe + rotLayer);
      let xStart = -width / 2;
      beginShape();
      curveVertex(xStart - 300, height / 2 + 500);
      curveVertex(xStart - 300, y1);
      curveVertex(xStart + (width / 5) * 1, y2);
      curveVertex(xStart + (width / 5) * 2, y3);
      curveVertex(xStart + (width / 5) * 3, y4);
      curveVertex(xStart + (width / 5) * 4, y5);
      curveVertex(width / 2 + 300, y6);
      curveVertex(width / 2 + 300, height / 2 + 500);
      endShape(CLOSE);
      pop();
    }
  }
}

function keyTyped() {
  if (key === "s") {
    save("myCanvas.jpg");
  }
}