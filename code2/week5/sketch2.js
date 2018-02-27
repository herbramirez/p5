
let box;


function setup() {
  createCanvas(500, 500);
  box = new Box();

}


class Box {
  constructor(x, y, xWid) {
    this.x = 100;
    this.y = 100;
    this.xWid = mouseX;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    push();
    fill(255,0,0);  
    rect(this.x, this.y, this.xWid* mouseX, 100);
    pop();
    push();
    fill(255,255,0);  
    rect(this.x+100, this.y+100, this.xWid, 100);
    pop();
    push();
    fill(0,0,255);
    rect(this.x+200, this.y+200, this.xWid, 100);
  }
}

function draw() {
  background(0);
    box.show();
    push();
    fill(255,0,0);
    rect(100, 100, mouseX, 100);
    pop();
    push();
    fill(255,255,0)
    rect(200, 200, mouseX, 100);
    pop();
    push();
    fill(0,0,255);
    rect(300, 300, mouseX, 100);
    pop();
}
