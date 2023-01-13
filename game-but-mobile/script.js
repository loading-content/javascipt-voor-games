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
let pfs = 3;
let speedy = 5;
let speed = 50;
//size scherm
let sizex = 350;
let sizey = 300;
//score
let score;
let status = 1; // 1 = spelen, 2 = eind

//startup stuff
function setup() {
  if (status == 1) {
    createCanvas(sizex, sizey);
    score = 0;
    breedte = 50;
    hoogte = 50;
    xpos = 25;
    ypos = 95;
    x = 250;
    pipe();
    draw();
  } 
  else if (status == 2) {
    draw2();
  }
}

//me pipes
function pipe() {
  x = 400;
  y = random(150, 250);
  h = 250;
  hh = -1;
  yy = y - 125;
}

//maakt alles
function draw() {
  background(220);
  stroke(0);
  strokeWeight(4);
  fill(150, 100, 255)
  rect(xpos, ypos, breedte, hoogte);
  fill(11, 252, 3)
  rect(x, y, breedte, h);
  rect(x, hh, breedte, yy)
  //kijkt of je de grond raakt
  if (ypos + 50 > sizey) {
    status = 2
    setup();
  }
  //punten
  else if (xpos === x) {
    if (ypos + 50 > y || ypos < yy) {
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
  textSize(20)
  stroke(0);
  strokeWeight(1);
  text("your score: " + score, 10, 20)
}

function draw2() {
  background(220);
  textSize(20);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text("you died press your sceen to restart", 10, 40)
}

//kijken of je op " " heebt geklickt
function touchStarted() {
  if (status === 2) {
    status = 1;
    setup()
  }
  else {
    ypos -= speed;
  }
}