const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;


var rowsHeight = 150;

function setup() {

  
  createCanvas(600,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  for(var i = 40; i<= width; i = i+50){
    plinkos.push(new Plinko(i , 55))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,85))
  }
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,120))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,150))
  }
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,185))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,225))
  }
  for(var i = 40; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,265))
  }
  for(var i = 15; i<= width-10; i = i+50){
    plinkos.push(new Plinko(i ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(0);
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var i = 0; i<plinkos.length;i++){
    plinkos[i].display();
 }


//rows.display();
 ground.display();

  drawSprites();
}