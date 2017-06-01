function setup(){
  createCanvas(1280, 800, WEBGL);
}

function draw(){
  background(0);
  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(255, 255, 255, 255, 0, 0);
  pointLight(255, 255, 255, 0, 255, 0);
  pointLight(255, 255, 255, 0, 0, 255);
  translate(0, 0, -200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  specularMaterial(175);
  torus(200, 40, 50, 50);
  translate(0, -210, 0);
  sphere(70, 50, 50);
}