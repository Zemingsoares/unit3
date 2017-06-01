var textbox;
var x=1;
var link = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
var link2 = "%20";
var link3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
var city = "City";
var region = " Region";
var country = "Country";

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  textbox = createInput();
    textbox.changed(loadLocation);
    textbox.position(width/4, height/4)
    textbox.style('width', '50%');
    textbox.style('text-align', 'center');
    textbox.style('font-size', '40px');
    textbox.style('background', '#eee');
    textbox.style('border', '0px');
    textbox.style('outline', '0');
    textbox.style('color', 'black');
}

function loadLocation() {
    var input = textbox.value();
    var loc = link.concat(input, link2, input, link3);
    loadJSON(loc, gotWeather); 
}
 
function gotWeather(data) {
//  console.log(data);
  city = data.query.results.channel.location.city;
  region = data.query.results.channel.location.region;
  country = data.query.results.channel.location.country;
  
  x = data.query.results.channel.wind.speed;
  
  console.log(x);
  
  textAlign(CENTER);
  noStroke();
  fill(255);
  textSize(40);
  text(city.concat(",",region), width/2, height*0.8);
  text(country, width/2, height*0.9);
}

function draw() {
  angleMode(radians);
  rotateY(frameCount*(x*0.01));
//  rotateY(45);
//  sphere(50)
  plane(200, 20);
  translate(100, height/8, 0);
  plane(50, 50);
  translate(-200, height/8, 0);
  plane(50, 50);
}