
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b,d,d2,d3,paperObject,trashi,trash

function preload()
{
 trashi = loadImage("sprites/dustbingreen (1).png")
}

function setup() {
	createCanvas(800, 700);
    trash=createSprite(700,600,100,160)
    trash.addImage("yeet",trashi)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b = new Ground(150,650,200,30)
	d = new Ground(680,650,200,30)
	d2 = new Trashcan(595,565,30,200)
	d3 = new Ground(795,565,30,200)
    paperObject = new Paper(150,600)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  drawSprites();
 
  b.display();
  d.display();
  d2.display();
  d3.display();
  paperObject.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:400,y:-400});
	}
}

