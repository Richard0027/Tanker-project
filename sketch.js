const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var tanker;
var cball;
var back;

function setup(){
    var canvas = createCavas(400,400);
    engine = Engine.create();
    world = engine.world;
    back = new Ball(20,350,12);
    back1 = new Ball(5,357,4);
    ground = new Ground(200,390,400,30);
    tanker1 = new Tanker(50,330,70,20,-PI/6);
    cball = new CanoonWheel(40,360,10);

}

function draw(){
background("skyblue");
Engine.update(engine);
ground.display();
back.display();
back1.display();
tanker1.display();
cball.display();

}