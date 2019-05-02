//The setup function only happens once
function setup() {
	createCanvas(600, 600); //create a 500px X 500px canvas
}
var elipseXr = 20;
var elipseYr = 20;
var valueR=255;
var valueG=255;
var valueB=127;
var oppacityV = 255;

function mousePressed(){ // function that execytes after pressing the mouse button
	valueR=random(255);	//gives a random value of Red
	valueG=random(255);	//gives a random value of Green
	valueB=random(255);	//gives a random value of Blue
	elipseXr=elipseXr+5;	//increases width of the ellipse
	elipseYr=elipseYr+5;	//increases height of the ellipse
	if (elipseXr>100&&elipseYr>100){	//changes the width adn the height to 20 after they got bigger then 100
		elipseXr=20;
		elipseYr=20;
	}
	oppacityV = 0; // changes transparency to 0

}
//The draw function happens over and over again
function draw() {

  background(238,222,227); //an RGB color for the canvas' background
  //circle
  fill(0,0,0,oppacityV);
  stroke(147, 146, 146,oppacityV);
	textSize(16);
	textFont("Arial");
	text("Press the mouse button to change the color and size of the circle", 50, 50);
  stroke(122,11,134);
  fill(143,240,41);
  rect(mouseX,mouseY,45,45); // locates rectangle based on position of the mouse
  stroke(255,255,127) // an RGB color for the circle's border
  fill(valueR,valueG,valueB); // an RGB color for the inside of the circle 
  ellipse(width/2,height/2,elipseXr,elipseXr); // center of canvas, 20px dia
}

