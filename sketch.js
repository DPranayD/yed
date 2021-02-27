var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;


function preload()
{
    	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	GROUNDe = new ground(400,700,800,20);
	paperBall = new Paper(200,650,20,20);
	Base1 = new Base(600,680,150,20);
	Base2 = new Base(665,650,20,150);
	Base3 = new Base(535,650,20,150);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  
  Engine.update(engine);
  paperBall.display();
  
  paperBall.velocityY = paperBall.velocityY + 85  
  Base1.display();
  Base2.display();
  Base3.display();
  GROUNDe.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
		
	}
}


