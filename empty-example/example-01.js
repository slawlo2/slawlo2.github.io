//global variable
//our own custom variable
let bubbles = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  bubbles[0] = new Bubble(200, 200, 40);
  bubbles[1] = new Bubble(400, 200, 20);


  //i++ is short way to say
  //i = i+1
  for(let i =0; i<500; i++){
    bubble(random(width), random(height), 20, 20 );
  }
}

function draw(){

  //print(dist(mouseX, mouseY, 0, 35));
  // mouseSpeedStroke = dist(mouseX, mouseY, pmouseX, pmouseY);
  // //print(mouseSpeedStroke);
  // if(mouseIsPressed){
  //   ellipseX = 600;
  //   ellipseY = 500;
  //   //checking if the mouse is in
  //   //the upper right corner of screen
  //   if(mouseX > width/2){
  //     strokeWeight(mouseSpeedStroke);
  //     //randomly grabbing color values
  //     stroke(random(255), random(255), random(255));
  //   } else {
  //     strokeWeight(5);
  //     stroke(20, 210, 180);
  //   }
  //   line(mouseX, mouseY, pmouseX, pmouseY);
  // } else {
  //   ellipseX = 300;
  //   ellipseY = 400;
  // }

  //randomly placing ellipse on the screen
  //via height value
  // ellipse(ellipseX, random(height), 50, 50);
  // for(let i=0; i < width; i = i+30){
  //   line(i, 0, i, height);
  // }
  // for(let i = 0; i<height; i= i+30){
  //   line(0, 0, width, i);
  // }


}
