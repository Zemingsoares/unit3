function setup() {
  createCanvas(windowWidth, windowHeight);
}

function Ball() {
  this.position = {x: 0,y: 0},
  this.speed = {x:random(-5, 5),y:random(-5, 5)},
  
  this.draw= function(){
    this.position.x = this.position.x + this.speed.x;
    this.position.y = this.position.y + this.speed.y;
    
    if(this.position.y > height){
      this.speed.y = this.speed.y * -1;
    }
    
    if(this.position.x > width){
      this.speed.x = this.speed.x * -1;
    }
    
    if(this.position.y <= 0){
      this.speed.y = this.speed.y / -1;
    }
    
    if(this.position.x <= 0){
      this.speed.x = this.speed.x / -1;
    }
    ellipse(this.position.x, this.position.y, 10, 10);
  }
}

var balls = [];

function mouseDragged(){
  var ball = new Ball();
  ball.position.x = mouseX;
  ball.position.y = mouseY;
  fill(random(0, 255), random(0, 255), random(0, 255))
  balls.push(ball);
}

function draw() {
  for(var i = 0; i < balls.length; i++)
  balls[i].draw();
}