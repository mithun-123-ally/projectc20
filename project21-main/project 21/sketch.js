
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1;
var rightside;
var leftside;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	
	//Create the Bodies Here.
    var  ball_options={
		isStatic:false,
        restutusion:0.3,
	    friction:0,
        density:1.2,		
	}

	ball=Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)
	
	
	ground1 =new ground(width/2,670,width,20);
    rightside = new ground(1350,600,20,120);
	leftside = new ground(1100,600,20,120);

	Engine.run(engine);
  
	rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
 
  ground1.display()
  rightside.display()
  leftside.display()

 
 
}

function keypressed(){
	if (keycode === up_arrow){
		Matter.Body.applyForce(ball,{x:0,y:0},{X:0,y:-5})

	}
}