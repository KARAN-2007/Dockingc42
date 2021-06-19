var bg;
var issI,iss;
var shipI,shipI2,shipI3,shipI4,ship;
var hasDocked=false;
function preload(){
  bg=loadImage("spacebg.jpg")
  
  
  issI=loadImage("iss.png")
  shipI=loadAnimation("spacecraft1.png")
  shipI2=loadAnimation("spacecraft2.png")
  shipI3=loadAnimation("spacecraft3.png")
  shipI4=loadAnimation("spacecraft4.png")
}

function setup() {
  createCanvas(1024,658);
  ship=createSprite(width/2-20,height/2+100)
  ship.addAnimation("1",shipI)
  ship.addAnimation("2",shipI2)
  ship.addAnimation("3",shipI3)
  ship.addAnimation("4",shipI4)
  ship.scale=0.175
  
  iss=createSprite( width/2, height/2,10,10);
  iss.addImage(issI)

  
}

function draw() {
  background(bg);
  console.log(hasDocked)  
  if(keyDown("LEFT_ARROW") && ship.x!==446.5 ){
    ship.x=ship.x-0.5
    ship.changeAnimation("3",shipI3)
  }
  else if(keyDown("RIGHT_ARROW")&& ship.x!==446.5 ){
    ship.x=ship.x+0.5
    ship.changeAnimation("4",shipI4)
  }
  else if(keyDown("UP_ARROW")&&ship.y !==399){
    ship.y=ship.y-0.5
    ship.changeAnimation("2",shipI2)
  }
  else if(keyDown("DOWN_ARROW")&& ship.y !==399){
    ship.y=ship.y+0.5
    ship.changeAnimation("2",shipI2)
  }
  else{
    ship.changeAnimation("1",shipI)
  }


  drawSprites();
  if(ship.x<=(iss.x) && ship.y<=(iss.y+70)){
    hasDocked=true;
    textSize(30)
    fill("white")
    text("DOCKING SUCCESSFUL!",width/2-200,500)
  }
}