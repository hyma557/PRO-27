
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;
var ground;
var roofObject ; 



function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	bobObject1=new Bob(200,350,50);
bobObject2=new Bob(250,350,50);
bobObject3=new Bob(300,350,50);
bobObject4=new Bob(350,350,50);
bobObject5=new Bob(400,350,50);
ground = new Base(300,200,300,20);
sling1= new Hanger(bobObject1.body,ground.body,-50*2,0);
sling2= new Hanger(bobObject2.body,ground.body,-25*2,0);
sling3= new Hanger(bobObject3.body,ground.body,-0*2,0);
sling4= new Hanger(bobObject4.body,ground.body,25*2,0);
sling5= new Hanger(bobObject5.body,ground.body,50*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	ground.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


  if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); } 
 
}



