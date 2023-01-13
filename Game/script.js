//alle dingen enzo
let breedte;
let hoogte;
let xpos;
let ypos;
//pipe stuff
let h;
let hh;
let x;
let y;
//speeds
let pfs = 5;
let speedy = 10;
let speed = 100;
//size scherm
let sizex = 800;
let sizey = 600;
//score
let score;
let status = 1; // 1 = spelen, 2 = eind

//startup stuff
function setup() {
  if (status == 1) {
    createCanvas(sizex, sizey);
    score = 0;
    breedte = 100;
    hoogte = 100;
    xpos = 50;
    ypos = 180;
    x = 600;
    pipe();
    draw();
  }
  else if (status == 2) {
    draw2();
  }
}

//me pipes
function pipe() {
  x = 800;
  y = random(300, 500);
  h = 1000;
  hh = -4;
  yy = y - 250;
}

//maakt alles
function draw() {
  background(220);
  stroke(0);
  strokeWeight(8);
  fill(150, 100, 255)
  rect(xpos, ypos, breedte, hoogte);
  fill(11, 252, 3)
  rect(x, y, breedte, h);
  rect(x, hh, breedte, yy)
  //kijkt of je de grond raakt
  if (ypos + 100 > sizey) {
    status = 2
    setup();
  }
  //punten
  else if (xpos === x) {
    if (ypos + 100 > y || ypos < yy) {
      status = 2;
      setup();
    }
    else {
      score++;
      pipe();
    }
  }
  //snelheid
  ypos += pfs;
  x -= speedy;
  fill(0)
  textSize(40)
  stroke(0);
  strokeWeight(1);
  text("your score: " + score, 20, 40)
}

function draw2() {
  background(220);
  textSize(40);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text("you died press enter to restart", 20, 80)
}

//kijken of je op " " heebt geklickt
function keyPressed() {
  if (keyCode === 13 && status === 2) {
    status = 1;
    setup()
  }
  if (keyCode === 32) {
    ypos -= speed;
  }
}