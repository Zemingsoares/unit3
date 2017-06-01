function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

var walls = {
  draw: function(){
    push();
    fill(183, 176, 161);
    translate(0, -145, -1000);
    plane(1100, 650);
    pop();
  
    fill(153, 146, 131);
    push();
    translate(-550, -145, -450);
    rotateY(1.5708);
    plane(1100, 650);
    pop();
  
    fill(153, 146, 131);
    push();
    translate(550, -145, -450);
    rotateY(1.5708);
    plane(1100, 650);
    pop();
  }
}
  
var ceilling = {
  draw: function(){
  
    fill(153, 146, 131);
    push();
    translate(0, -470, -500);
    rotateX(1.5708);
    plane(1100, 1100);
    pop();
  
    fill(116, 84, 59);
    push();
    translate(0, 180, -500);
    rotateX(1.5708);
    plane(1100, 1100);
    pop();
  }
}

var frontPaintings = {
  
  draw: function(){
  fill(123, 45, 36);
  push();
  translate(0, -225, -1000);
  box(550, 225, 10);
  pop();
  
  push();
  translate(0, 10, -1000);
  box(550, 225, 10);
  pop();
  
  fill(93, 15, 6);
  push();
  translate(0, -310, -990);
  plane(350, 20);
  pop();
  
  push();
  translate(190, -235, -990);
  plane(50, 170);
  pop();
  
  push();
  translate(-190, -235, -990);
  plane(50, 170);
  pop();
  
  push();
  translate(0, -170, -990);
  plane(350, 40);
  pop();
  
  push();
  translate(-10, -70, -990);
  plane(470, 10);
  pop();
  
  push();
  translate(-240, -10, -990);
  plane(10, 110);
  pop();
  
  push();
  translate(-10, 55, -990);
  plane(470, 35);
  pop();
  
  push();
  translate(200, -10, -990);
  plane(50, 110);
  pop();
  }
}

function draw(){
  background(157);
  orbitControl();
  
  walls.draw();
  ceilling.draw();
  frontPaintings.draw();

  fill(123, 45, 36);
  push();
  translate(-545, -46, -700);
  rotateY(1.5708);
  box(300, 337, 10);
  pop();
  
  fill(110, 87, 87);
  push();
  translate(-539, -46, -695);
  rotateY(1.5708);
  plane(100, 230);
  pop();
  
  fill(110, 87, 87);
  push();
  translate(-539, -209, -695);
  rotateY(1.5708);
  plane(270, 10);
  pop();
  
  fill(110, 87, 87);
  push();
  translate(-539, -46, -575);
  rotateY(1.5708);
  plane(50, 337);
  pop();
  
  fill(110, 87, 87);
  push();
  translate(-539, -46, -825);
  rotateY(1.5708);
  plane(50, 337);
  pop();
  
  fill(110, 87, 87);
  push();
  translate(-539, -209, -695);
  rotateY(1.5708);
  plane(270, 10);
  pop();
  
}