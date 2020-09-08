
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var bob1,bob2,bob3,bob4,bob5,roof,rope1,bobDiameter,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(350,300,300,20)
	bobDiameter=50;
	
	bob1=new Bob(250,500,25,25)
	bob2=new Bob(300,500,25,25)
	bob3=new Bob(350,500,25,25)
	bob4=new Bob(400,500,25,25)
	bob5=new Bob(450,500,25,25)
	
	rope1=new Chain(bob1.body,roof.body,-bobDiameter*2,0)
	rope2=new Chain(bob2.body,roof.body,-bobDiameter*1,0)
	rope3=new Chain(bob3.body,roof.body,-bobDiameter*0,0)
	rope4=new Chain(bob4.body,roof.body,-bobDiameter*-1,0)
	rope5=new Chain(bob5.body,roof.body,-bobDiameter*-2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);4
  background("white");
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  rectMode(CENTER);
  rect(350,300,300,20)
  rope1.display()
  drawSprites();
 
}


function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:0})

}

}
