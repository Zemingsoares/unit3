setInterval(fetchMoon, 1000)

function setup() {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(RADIUS);
	colorMode(RGB, 100)
}

function fetchMoon(){
	loadJSON('http://api.burningsoul.in/moon', moon);
}

function draw() {
}

function moon(data) {
  
	var distEarth = data.DFCOE-368100;
	var distSun = data.DFS-150547900;
	var light = (data.illumination-0.68)*10000;
	var age = (data.age-28.75)*100000;
	fill(light);
	noStroke();
	console.log(light)
	ellipse(age, distSun, light, light);
}