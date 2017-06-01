var home;
var saoPaulo;
var deathValey;
var southPole;

 
function setup() {
  loadJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%224435-281%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&', home);
  loadJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22sao%20paulo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', saoPaulo);
  loadJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22dath%20valey%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', deathValey);
  loadJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22south%20pole%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', southPole);
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function home(data) {
//  console.log(data.query.results.channel.item.condition.temp);
  var C = map (data.query.results.channel.item.condition.temp, 5, 302, -15, 150);
//  var C = 25;
  var R = map (C, -5, 40, 0, 255);
  var GB = map (C, -5, 40, 255, 0);
//  console.log(R);
//  console.log(GB);
  fill(R, GB, GB);
  ellipse(width/4, height/4, 70, 70);
//  console.log(C);

}

function saoPaulo(data) {
//  console.log(data.query.results.channel.item.condition.temp);
  var C = map (data.query.results.channel.item.condition.temp, 5, 302, -15, 150);
//  var C = 25;
  var R = map (C, -5, 40, 0, 255);
  var GB = map (C, -5, 40, 255, 0);
//  console.log(R);
//  console.log(GB);
  fill(R, GB, GB);
  ellipse((width*3)/4, height/4, 70, 70);
//  console.log(C);
}


function deathValey(data) {
//  console.log(data.query.results.channel.item.condition.temp);
  var C = map (data.query.results.channel.item.condition.temp, 5, 302, -15, 150);
//  var C = 25;
  var R = map (C, -5, 40, 0, 255);
  var GB = map (C, -5, 40, 255, 0);
//  console.log(R);
//  console.log(GB);
  fill(R, GB, GB);
  ellipse(width/4, (height*3)/4, 70, 70);
//  console.log(C);
}

function southPole(data) {
//  console.log(data.query.results.channel.item.condition.temp);
  var C = map (data.query.results.channel.item.condition.temp, 5, 302, -15, 150);
//  var C = 25;
  var R = map (C, -5, 40, 0, 255);
  var GB = map (C, -5, 40, 255, 0);
//  console.log(R);
//  console.log(GB);
  fill(R, GB, GB);
  ellipse((width*3)/4, (height*3)/4, 70, 70);
//  console.log(C);
}

function draw() {

}
