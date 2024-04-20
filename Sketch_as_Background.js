//Sketch: Rotating image on sphere and when key pressed image on sphere changes
var canvas;
var bg;
let experiments = [];

//Auto resized background depending on different screens
function windowResized(){
  consolelog('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  let exp1 =loadImage("My_Workbook/workbook/img/experiments/e1.png"); //stores image in variable exp#
  let exp2 =loadImage("My_Workbook/workbook/img/experiments/e2.png");
  let exp3 =loadImage("My_Workbook/workbook/img/experiments/e3.png");
  let exp4 =loadImage("My_Workbook/workbook/img/experiments/e4.png");
  let exp5 =loadImage("My_Workbook/workbook/img/experiments/e5.png");
  let exp6 =loadImage("My_Workbook/workbook/img/experiments/e6.png");
  let exp7 =loadImage("My_Workbook/workbook/img/experiments/e7.png");
  let exp8 =loadImage("My_Workbook/workbook/img/experiments/e8.png");
  let exp9 =loadImage("My_Workbook/workbook/img/experiments/e9.png");
  let exp10 =loadImage("My_Workbook/workbook/img/experiments/e10.png");
  experiments = [exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8, exp9, exp10];
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  
  //Positions canvas behind the web content
  canvas.style('z-index', '-1');
  
  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() { 
  
    //Rotates element
    rotateY(frameCount * 0.005);
    translate(20, 20, -50, 10);
  
    //Displays rotating image
    //image drawn from center of image
     imageMode(CENTER);
     
     let randoExp = random(experiments);
     
     //Clears background so rotation is clearer to see
     background(0);
     
     image(randoExp, width/2, height/2);
     noStroke();
     push();
     shininess(200);
     sphere(100);
     pop(); 
}

// Slows down frameRate when mouse is pressed 
function mousePressed(){
  pressed = true;
  console.log("pressed");
  
  //Rotates element
    rotateY(200);
    frameRate(7);
    translate(20, 20, -50, 10);
    return false;
}
