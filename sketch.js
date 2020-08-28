const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var binPart2;
var paperBall;
var engine, world;
 

function setup()
{
  createCanvas(900, 500);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (450, 475, 900, 12);

	binPart1 = new ThrowBin (600,375,20, 150);
	binPart2 = new ThrowBin (690,460,180, 20);
  binPart3 = new ThrowBin (780,375,20, 150);

  paperBall = new CrumpPaper (170, 400, 70);

  Engine.run(engine);
  
}

function draw() {

  background(170);
  
  paperBall.display();
  binPart1.display();
  binPart2.display();
  binPart3.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0.54,y:-0.78});
   }
 }
 