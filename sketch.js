const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
let ball ;
let bt1;
let bt2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  bt1 = createImg("up.png");
  bt1.position(20,30);
  bt1.size(50,50);
  bt1.mouseClicked(vForce);
  
  var ball_options={
restitution:0.56
  }

  ball = Bodies.circle(20,50,20,ball_options);
  World.add(world,ball);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
}

function vForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}


