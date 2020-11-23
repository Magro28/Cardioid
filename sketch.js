let xMov = 0;
let yMov = 0;
let xDelta=1;
let yDelta=1


var cardoit1;
var cardoit2;
var cardoit3;
var cardoit4;
var cardoit5;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cardoit1 = {radius: 130, total: 200, factor: 0};
  cardoit2 = {radius: 130, total: 50, factor: 0};
  cardoit3 = {radius: 130, total: 100, factor: 0};
  cardoit4 = {radius: 130, total: 150, factor: 0};
  cardoit5 = {radius: windowHeight /2 - 30, total: 200, factor: 0};

  //r = height / 2 - 16;
}

function getVector(index, total, radius) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(radius);
  return v;
}

function drawCardiot(transFactorWidth, transFactorHeight, cardoit, deltaFactor) {
  
  cardoit.factor += deltaFactor;
  
  translate(transFactorWidth, transFactorHeight);

  stroke(255*cardoit.factor, 255*random(), 255*cardoit.factor*random() );
  strokeWeight(2);
  noFill();
  ellipse(0, 0, cardoit.radius * 2);

  strokeWeight(2);
  for (let i = 0; i < cardoit.total; i++) {
    let a = getVector(i, cardoit.total, cardoit.radius);
    let b = getVector(i * cardoit.factor, cardoit.total, cardoit.radius);
    line(a.x, a.y, b.x, b.y);
  }
}

function draw() {
  background(0);


  if (xMov > width - 300){
    xDelta = -1;
  } else if (xMov < 300){
    xDelta = 1;
  }
  
  if (yMov > height - 300){
    yDelta = -1;
  } else if (yMov < 150){
    yDelta = 1;
  }

  xMov += xDelta ;
  yMov += yDelta;
  

  drawCardiot(150,150,cardoit1, 0.005);
  drawCardiot(300,0,cardoit2, 0.001);
  drawCardiot(300,0+yMov,cardoit3, 0.005);
  drawCardiot(-600,300-yMov,cardoit4, 0.007);
  drawCardiot(width/2,height/2-450,cardoit5, 0.017);
  //const total = 200; //int(map(mouseX, 0, width, 0, 200));
  //factor += 0.015;
  //total += 1;
  
  // translate(width / 2, height / 2);
  // stroke(255, 150);
  // strokeWeight(2);
  // noFill();
  // ellipse(0, 0, r * 2);

  // strokeWeight(2);
  // for (let i = 0; i < total; i++) {
  //   const a = getVector(i, total);
  //   const b = getVector(i * factor, total);
  //   line(a.x, a.y, b.x, b.y);
  // }
}