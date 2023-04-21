let minYchange = -10; //these two ranges determine line overlap and width
let maxYchange = 50;
let layers = 1;
let rotStripe = 0; //rotation of each stripe; try 10 or 90;
// try lines = true with high alpha or lines = false with low alpha (100)
let outlines = true;
let alpha = 255; //out of 255
let randomColors = false; //true = random color; false = color from palette table
let filling = true;
let outlineColoured = false; //false for black lines
let outlineWidth = 1; //line width
let numOfColors = 5; //5 in the pallet, add more for black or white
let outlineAlpha = 255; //out of 255 - used if numOfColors=1 & lines, filling, colorLines all true, low alpha, high outlineWidth


let r, g, b;
let table;
let loadedTable = null;

export const updateValues = ({
  new_minYchange = minYchange,
  new_maxYchange = maxYchange,
  new_layers = layers,
  new_rotStripe = rotStripe,
  new_outlines = outlines,
  new_alpha = alpha,
  new_randomColors = randomColors,
  new_filling = filling,
  new_outlineColoured = outlineColoured,
  new_outlineWidth = outlineWidth,
  new_numOfColors = numOfColors,
  new_outlineAlpha = outlineAlpha,
}) => {
  minYchange = new_minYchange;
  maxYchange = new_maxYchange;
  layers = new_layers;
  rotStripe = new_rotStripe;
  // try lines = true with high alpha or lines = false with low alpha (100)
  outlines = new_outlines;
  alpha = new_alpha;
  randomColors = new_randomColors;
  filling = new_filling;
  outlineColoured = new_outlineColoured;
  outlineWidth = new_outlineWidth;
  numOfColors = new_numOfColors;
  outlineAlpha = new_outlineAlpha;
};

export const preload = (p5, parentRef) => {
  // table = p5.loadTable("./colors.csv", "csv", "header", (newTable) => {console.log('table AAAAAAAAAAAA', newTable)}, (error) => {console.log('error', error)})
  // table = p5.loadTable('colors.csv', 'header');
  // p5.loadTable("colors.csv", "csv", "header", (loadedTable) => {
  //   console.log("loadedTable", loadedTable);
  //   table = loadedTable;
  // });
  // // table = p5.loadTable("http://p5js.org/reference/assets/mammals.csv", "csv", "header");
  // console.log(table.getRowCount() + " total rows in table")
};

export const setup = (p5, parentRef) => {
  const canv = p5
    .createCanvas(p5.windowHeight*0.8, p5.windowHeight*0.8)
    .parent(parentRef);

  canv.mousePressed((event) => {
    drawLineArt(p5);
  });
  drawLineArt(p5);

  if (document.getElementById("defaultCanvas1")) {
    document.getElementById("defaultCanvas1").remove();
  }
};

export const drawLineArt = (p5) => {
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
      // let col = p5.floor(p5.random(numOfColors));
      // console.log("TABLE DATA", table.get(palette, col * 3))
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
    }
  }
};
