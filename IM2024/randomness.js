var purple, orange, yellow;
purple="#D630FF";
orange="#FFA030";
yellow="#FFE76B";
colours=[purple, orange, yellow];

function setup() {
  //(Makes it full size of screen)
  createCanvas(windowWidth, windowHeight);
  //(Colour of screen/bg)
  background(255, 255, 0);
  
  //(Rate at which it draws the next pos mouse was in)
  frameRate(7);
  textSize(120);
}

//(circle centre is the point of movement)
function draw() {
  fill(random(colours));
  circle(random(width), random(height), random(500));
  //(This removes the additional frames of circles trailing behind)
  //background(255, 255, 0, 16); //(the last num is the secs before it fades line)
 //shape (x pos, y pos, size in pixels)
 //strokeWeight(5);
 //(Removes outline of shape)
 noStroke();
 
 fill(random(colours));
  triangle(random(width), random(height), random(width), random(height));
  triangle(random(width/2), random(height/2), random(width/2), random(height/2));
 
 text("HELLO", width/2, height/2);
 
 //Changes color of circle depending on where mouse is but mouse/# as color-range max out
//fill(r,g,b,alpha-val) <- alpha-value is the opacity
 fill(mouseX/4, mouseY/2, mouseX/2);
 
 //stroke(255, 0, 0);
 circle(mouseX, mouseY, 100);
 //(pmouse means previous position of mouse)
  //line(mouseX, mouseY, pmouseX, pmouseY);
}

//function draw(){
 // noStroke();
 // fill(255, 231, 203);
 // circle(width/2, height/2, 400);
 // fill(0, 145, 226);
  //circle(width/2.5, height/2, 100);
 // fill(0, 145, 226);
  //circle(width/1.75, height/2, 100);
 // fill(0,0,0);
 // line(
//}

//(Checks if mouse has been pressed)
function mousePressed(){
  //(Makes colour random)
  background(random(256), random(256), random(256));
}
