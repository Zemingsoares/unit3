var textbox;
var c;
var r;
var cc;
var oc;
var tc;
var link = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
var link2 = "%20";
var link3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
var city = "City";
var region = " Region";
var country = "Country";


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cc = 0;
  tc = cc;
  oc = tc;
  
  textbox = createInput();
    textbox.changed(loadLocation);
    textbox.position(width/4, height/4)
    textbox.style('width', '50%');
    textbox.style('text-align', 'center');
    textbox.style('font-size', '40px');
    textbox.style('background', 'white');
    textbox.style('border', '0px');
    textbox.style('outline', '0');
    textbox.style('color', 'black');
  frameRate(10);
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
  
  c = map (data.query.results.channel.item.condition.temp, 5, 302, -15, 150);
  r = map (c, -5, 40, 0, 255);
  var gb = map (c, -5, 40, 255, 0);
  
    cc = tc;
    oc = r;

  background(0);
  push();
  textAlign(CENTER);
  noStroke();
  fill(255);
  textSize(40);
  text(c+"Cº", width/2, height*0.7);
  text(city.concat(",",region), width/2, height*0.8);
  text(country, width/2, height*0.9);
  pop();
  fill(tc);
}

function draw() {
  
  push()
  console.log(tc);
  
  if (oc > cc){
    for (var i = cc; i < oc; i++){
      tc = i;
      fill(tc);
    }
  }
  
  if (oc < cc){
    for (var x = cc; x > oc; x--){
      tc = x;
      fill(tc);
    }
  }
  console.log(tc);
//  console.log(co);
//  console.log(cc);
  
  ellipse(width/2, height/2, 70, 70);
  pop();
}

function keyPressed() {
  if(keyCode == ENTER) {
      loadLocation();
    //  console.log(c);
    } 
}