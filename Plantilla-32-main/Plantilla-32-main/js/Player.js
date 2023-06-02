class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "blue";
    this.life2 = "blue";
    this.life3 = "blue";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("player", 310, 40);

    fill(this.life1);
    rect(width - 1370, 50, 70, 30);
    fill(this.life2);
    rect(width - 1300, 50, 70, 30);
    fill(this.life3);
    rect(width - 1230, 50, 70, 30);
    pop();
  }
 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
