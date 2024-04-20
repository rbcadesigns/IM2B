var img, img2;
function preload() {
  img=loadImage("My_Workbook/workbook/img/bubble.png");
  
  gif_loadImg = loadImage("My_Workbook/workbook/img/bubbles.gif");
  //gif_createImg = createImg("data/cat.gif");
}

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  imageMode(CENTER);
  //background(255, 204, 0);
}

function draw() {
if(mouseIsPressed){
  filter(INVERT);
  //dimensions 100x100
  image(gif_loadImg, mouseX, mouseY, 100, 100);
  //gif_createImg.position(mouseX, mouseY);
}   

else 

{
  filter(BLUR); 
  //dimensions 100x100
  image(img, mouseX, mouseY, 100, 100);
}
}

function keyPressed(){
  
}
