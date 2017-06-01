var img;
var x=0;
var y=0;
var z=90;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  img=loadImage("moon.jpg");
}

function draw(){
  background(0);
  translate(0, 500, 0);
  
  if (keyIsDown(UP_ARROW)) {
    x+=0.008;
  } else if (keyIsDown(DOWN_ARROW)) {
    x-=0.008;
  } else if (keyIsDown(RIGHT_ARROW)) {
    z+=0.008;
  } else if (keyIsDown(LEFT_ARROW)) {
    z-=0.008;
  }
  rotateX(x);
  rotateZ(z);
  texture(img);
  sphere(500);
}