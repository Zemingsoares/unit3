
var num = 200;
var range = 10;

var p = false;

var x = [];
var y = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for ( var i = 0; i < num; i++ ) {
    x[i] = width/2;
    y[i] = height/2;
  }
  frameRate(30);
}

function draw() {
  background(0);

  for ( var i = 1; i < num; i++ ) {
    x[i - 1] = x[i];
    y[i - 1] = y[i];
  }

  x[num - 1] = mouseX + random(-range, range);
  y[num - 1] = mouseY + random(-range, range);

  for ( var j = 1; j < num; j++ ) {
    var val
    if (p == true){
      val = j / num * 255;
    } else{
      val = 0;
    }
    stroke(val);
    line(x[j - 1], y[j - 1], x[j], y[j]);
  }
}

function mousePressed(){
  p = true
}

function mouseReleased(){
  p = false;
}