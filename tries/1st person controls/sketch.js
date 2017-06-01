var posZ = 0;
var posX = 0;
var sbz = 0;

var y = 0;
var x = 0;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  sbz++;
  background(0);
  
  var a = (mouseY-height/2)/width
  var b = a/40;
  
  if( y < 1.3 ){
    y = y + b;
  } else if ( y >= 1.3){
    y = 1.3;
  }
  
  if( y > -1.3 ){
    y = y + b;
  } else if ( y <= -1.3){
    y = -1.3;
  }
  
  var c = (mouseX-width/2)/width
  var d = c/25
  
  x = x + d;
  
  // push()
  // fill(255, 0, 0)
  // sphere(50)
  // pop()
  translate(posX, 0, posZ)
  rotateY(x)
  rotateX(y)
  
  
  push()
  fill(0, 0, 255)
  sphere(50)
  pop()
  
  fill(255, 255, 0)
  translate(-250, 0, -300)
  torus(50, 15);
  
  translate(500, 0, 0)
  torus(50, 15);
  
  
  fill(0, 255, 0)
  translate(0, 500, 0);
  rotateX(-PI/2);
  plane(5000, 5000);

//  camera(posX, 0, posZ)
  
  if (keyIsDown(UP_ARROW) || mouseIsPressed) {
    posZ = posZ + 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    posZ = posZ - 5;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    posX = posX + 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    posX = posX - 5;
  }
}

// function shootingBall(){
//   translate(0, 0, sbz)
//   fill(0, 0, 255)
//   sphere(50)
// }

function mousePressed() {
    sbz = 0;
    posZ = posZ + 5;
    shootingBall()
}