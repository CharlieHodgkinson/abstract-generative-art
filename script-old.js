/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas.width, canvas.height)

// clearing the stage
function removeAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

class Root {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 7 + 5; // 5 to 12 px
    this.size = Math.random() * 1 + 2; // 2 to 3 px
    this.vs = Math.random() * 0.2 + 0.05; // the size of the circle thats drawn
    this.angleX = Math.random() * 6.2; // 6.2 is roughly a circle radians?
    this.vaX = Math.random() * 0.6 - 0.3;
    this.angleY = Math.random() * 6.2; // 6.2 is roughly a circle radians?
    this.vaY = Math.random() * 0.6 - 0.3;
    this.lightness = 10;
  }
  update() {
    this.x += this.speedX + Math.sin(this.angleX);
    this.y += this.speedY + Math.sin(this.angleY);
    this.size += this.vs;
    this.angleX += this.vaX;
    this.angleY += this.vaY;

    if (this.lightness < 70) this.lightness += 0.25;

    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'hsl(140,100%,' + this.lightness + '%)';
      ctx.fill();
      ctx.stroke(); // gives it border, if none border will be black
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

function drawCircles() {
  // how many circles to draw 
  // I started with 8 but now I think 15 is the magic number
  for (i = 0; i < 15; i++) {

    const radius = Math.floor(Math.random() * 4) * 20 + 20;
    // const cx = Math.floor(Math.random() * 4) * 20 + 20;
    const cx = Math.floor(Math.random() * canvas.width);
    // const cy = Math.floor(Math.random() * 4) * 20 + 20;
    const cy = Math.floor(Math.random() * canvas.height);

    const root = new Root();

    ctx.beginPath();
    // x	The x-coordinate of the center of the circle	
    // y	The y-coordinate of the center of the circle	
    // r	The radius of the circle	
    // sAngle	The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)	
    // eAngle	The ending angle, in radians
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    root.update(cx, cy);
    ctx.stroke();

    // radius - maximum 14, minimum 2 and in increments of 2 
    circle.setAttribute("r", Math.floor(Math.random() * 7) * 2 + 2) ;

    // location x
    // minimum 20 maximum 80, incremements of 20 
    // (so either 20 , 40, 60, 80 )
    circle.setAttribute("cx", Math.floor(Math.random() * 4) * 20 + 20);
    // location y
    circle.setAttribute("cy", Math.floor(Math.random() * 4) * 20 + 20);

    // // add these elements to my stage
    svg.appendChild(circle);
  }
}


// drawCircles();

document.addEventListener("click", function () {
  removeAll();
  drawCircles();
  console.log('in click')
});