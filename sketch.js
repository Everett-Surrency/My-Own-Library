var fixedRect, movingRect, object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100, 100, 40, 40);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(200, 100, 40, 40);
  object2.shapeColor = "green";
  object2.debug = true;
  object3 = createSprite(300, 100, 40, 40);
  object3.shapeColor = "green";
  object3.debug = true;
  object4 = createSprite(400, 100, 40, 40);
  object4.shapeColor = "green";
  object4.debug = true;

}
function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  bounceOff(movingRect, fixedRect) 
  if(isTouching(movingRect, object3)) {
    movingRect.shapeColor = "red"
    object3.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green"
    object3.shapeColor = "green"
  }
  drawSprites(); 


if(isTouching(movingRect, object4)) {
    movingRect.shapeColor = "red"
    object4.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green"
    object4.shapeColor = "green"
  }
}