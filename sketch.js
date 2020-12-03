
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash;
var ground;
var b1,b2,b3;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new bin(1000,330,20,200,90);
	b2 = new bin(890,290,20,100,0);
	b3 = new bin(1110,290,20,100,0);
	ground = new grd(width/2,height-50,width,20);  
	trash = new Paper(100,100,20);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  ground.display();
  trash.display();
  b1.display();
  b2.display();
  b3.display();
  //drawSprites();
 
}

function keyPressed() {
	console.log("key pressed");
	if(keyCode === UP_ARROW){
		console.log("up");
		Body.applyForce(trash.body,trash.body.position,{x:85,y:-85});
	}
}

