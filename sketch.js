const Engine =  Matter.Engine
const World =  Matter.World
const Bodies =  Matter.Bodies

var engine ,world ,ball,ground; 

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world

 var b_option = {
   restitution:0.9
 }
 ball=Bodies.circle(400,100,30,b_option)
 World.add(world,ball)

 var g_option = {
   isStatic : true
 }
 ground = Bodies.rectangle(width/2,height-15,width,20,g_option)
 World.add(world,ground)
}

function draw() {
  background(255,255,255);  

  Engine.update(engine)
  rectMode(CENTER)
  ellipseMode(RADIUS)

  rect(ground.position.x,ground.position.y,width,20)
  ellipse(ball.position.x,ball.position.y,30)
}