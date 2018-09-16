var x = 0;
var value = 0;
function setup() {
  createCanvas(800, 800);
  ellipseMode(RADIUS);
}

function draw() {
  background(200);
  fill(value);
  ellipse(mouseX, mouseY, 50, 50);
}
  function touchStarted() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
