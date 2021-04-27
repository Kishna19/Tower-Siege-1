const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,block1;
var polygon,slingShot
//var invisibleGround;

function setup()
{
    var canvas = createCanvas(1000,1000)
    engine = Engine.create();
    world = engine.world;
    
    //invisibleGround = createSprite(450,550,500,20);
    //invisibleGround.visible = false;

    platform1 = new Ground(450,550,500,20);
    platform2 = new Ground(600,250,300,20);


// FOR FIRST PLATFORM   
    // top
    block1 = new Box(400,400,35,35);

    // second layer
    block2 = new Box(360,440,35,35);
    block3 = new Box(400,440,35,35);
    block4 = new Box(440,440,35,35);

    // third layer
    block5 = new Box(320,480,35,35);
    block6 = new Box(360,480,35,35);
    block7 = new Box(400,480,35,35);
    block8 = new Box(440,480,35,35);
    block9 = new Box(480,480,35,35);


// FOR SECOND PLATFORM
    // top
    block10 = new Box(550,100,35,35);

    // second layer
    block11 = new Box(510,140,35,35);
    block12 = new Box(550,140,35,35);
    block13 = new Box(590,140,35,35);

    // third layer
    block14 = new Box(470,180,35,35);
    block15 = new Box(510,180,35,35);
    block16 = new Box(550,180,35,35);
    block17 = new Box(590,180,35,35);
    block18 = new Box(630,180,35,35);

    polygon = new Polygon(100,400,20,20);

    slingShot = new SlingShot(polygon.body,{x:200, y:400})


}

function draw()
{   
    background(180);
    Engine.update(engine);
    strokeWeight(4);
    platform1.display();
    platform2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    polygon.display();
    slingShot.display();
    //drawSprites();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}