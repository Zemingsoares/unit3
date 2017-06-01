var bg;
setInterval(fetchISS, 5000)

function preload(){
    bg = loadImage("time_zones_4.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bg, 0, 0, windowWidth, windowHeight);
}

function fetchISS(){
  loadJSON('http://api.open-notify.org/iss-now.json', gotISS);
}

function gotISS(data){
//  console.log(data);
  var longitude = Number(data.iss_position.longitude);
  var latitude = Number(data.iss_position.latitude);
  
  console.log(longitude);
  console.log(latitude);
  
  var x = map(longitude, -180, 180, 0, windowWidth);
  var y = map(latitude, 90, -90, 0, windowHeight);
  
  console.log(x);
  console.log(y);
  
  fill(255, 0, 0);
  noStroke();
  ellipse(x, y, 10, 10);
}

function draw() {
  
}