
class ThrowBin {
  constructor(x, y, width, height) {
    var optn = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x, y, width, height, optn);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");

    World.add(world, this.body);
  }
  display(){
    
    fill("red");
    var pos = this.body.position;
    var angle = this.body.angle
    push();
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 690, 360, 240, 220);
    pop();
  }
}
