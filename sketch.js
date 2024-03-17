let n;
function setup() {
  createCanvas(600, 600);
  background(220)
  colorMode(RGB);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(r,g,b);
  Pattern();
    button = createButton("Click");
    button.style('background-color', 'white');
	button.mousePressed(changeColor);
	button.position(40, 25);
}
function Pattern(){
   translate(10,0)
   Grass();
   translate(+5,+10);
   Grass();
   translate(-5,+10);
   Grass();
   translate(+5,+10);
   Grass();
   translate(-5,+10);
   Grass();
   translate(+10,+10);
   Grass();
   translate(-5,+10);
   Grass();
   translate(+5,+10);
   Grass();
   translate(+5,+10);
   Grass();
   translate(-5,+10);
   Grass();
   translate(+10,+10);
   Grass();
}
function Grass() {
  ellipseMode(CENTER);
  for (let x = 40; x < width - 80; x += 4.5) {
    let xoff = 0;
    let yoff = 0;

    // lean
    n = noise(x * 0.8);
    // height
    yoff += noise(x * 4) * 25;
    // wind
    n = noise(x * 0.02 + millis() * -0.00025);
    xoff += n * 15;

    stroke('green');
    strokeWeight(0.4);
    line(x, 300, x + xoff, 100 + yoff);
    stroke('white');
    strokeWeight(2);
    point(x + xoff, 98 + yoff)
  }
}
function changeColor(){
    r = random(255);
	g = random(255);
	b = random(255);
}