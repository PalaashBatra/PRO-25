const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world
var paper;
var rect1
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	paper = new Paper(100,250);
	rect1 = new Dustbin(1050,665,200,15);
    
var options ={
  isStatic:true
}
	ground = Bodies.rectangle(600,680,1200,20,options);
		
		World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
      
  drawSprites();
  paper.display();
  rect1.display();
  
  keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.15,y:-1.6849});

	}

	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0});

	}

}
