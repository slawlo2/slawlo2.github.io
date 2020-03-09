//global variable
//our own custom variable
// let ellipseX = 300;
// let ellipseY = 400;
// let mouseSpeedStroke;
//
let bubbles = [];
// let marilyn;
// function preload(){
//   marilyn = loadImage('MarilynEye.png');
// }
function setup(){
  createCanvas(1200, 800);
   for(let i = 0; i < 5; i ++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
   }
}

function mousePressed() {
  for(let i = 0; i < bubbles.length; i ++) {
  bubbles[i].clicked(mouseX, mouseY);
  }

}

function mouseDragged(){
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r)
  bubbles.push(b);
}

// createCanvas(windowWidth, windowHeight);
//
//   background(180, 90, 130);
//
//   //i++ is short way to say
//   //i = i+1
//   for(let i =0; i<500; i++){
//     ellipse(random(width), random(height), 20, 20);
//     line(i, 0, i, height);
//   }
//   for(let i = 0; i<height; i= i +30){
//     line(0, 0, width, i+50)
//   }
//

//
//
function draw(){
  background(0);
  if (mouseY > 0) {
    background(255, 255, 255);
  }
  if (mouseY > 100) {
    background(220,220,220);
  }
  if (mouseY > 200) {
    background(192,192,192);
  }
  if (mouseY > 300) {
    background(169,169,169);
  }
  if (mouseY > 400) {
    background(128,128,128);
  }
  if (mouseY > 500) {
    background(105,105,105);
  }
  if (mouseY > 600) {
    background(47,79,79);
  }
  if (mouseY > 700) {
    background(0,0,0);
  }
  for(let i = 0; i < bubbles.length; i ++) {
  bubbles[i].move();
  bubbles[i].show();
  }


  if (mouseX > 0) {
    fill(255, 0, 0);
  }
  if (mouseX > 200) {
    fill(255, 165, 0);
  }
  if (mouseX > 400) {
    fill(255, 255, 0);
  }
  if (mouseX > 600) {
    fill(0, 128, 0);
  }
  if (mouseX > 800) {
    fill(0, 0, 255);
  }
  if (mouseX > 1000) {
    fill(75, 0, 130);
  }

  if (mouseX > 600) {
      this.x = this.x + random(-30,30);
      this.y = this.y + random(-30,30);
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(px, py){
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
    }
  }

  move() {
    this.x = this.x + random(-10,10);
    this.y = this.y + random(-10,10);
  }
  show() {
    // stroke(255, 200, 0);
    strokeWeight(2);
    // fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
//   //print(disst(mouseX, mouseY, 0, 35));
//   mouseSpeedStroke = dist(mouseX, mouseY, pmouseX, pmouseY);
//   //print(mouseSpeedStroke);
//   if(mouseIsPressed){
//     ellipseX = 600;
//     ellipseY = 500;
//     //checking if the mouse is in
//     //the upper right corner of screen
//     if(mouseX > width/2){
//       strokeWeight(10);
//       //randomly grabbing color values
//       stroke(random(255), random(255), random(255));
//     } else {
//       strokeWeight(5);
//       stroke(20, 210, 180);
//     }
//     line(mouseX, mouseY, pmouseX, pmouseY);
//   } else {
//     ellipseX = 300;
//     ellipseY = 400;
//   }
//
//   ellipse(ellipseX, random(height), 50, 50);
//
//   for(let i=0; i < width; i = i+10){
//     print(i);
//
//   }
