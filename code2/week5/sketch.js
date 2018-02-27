let box;


function setup() {
  createCanvas(500, 500);
  box = new Box();

}

function draw() {
  background(0);
    box.show();
}

class Box {
  constructor(x, y, r) {
    this.x = 100;
    this.y = 100;
    this.xWid = 100;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    push();
    fill(255,0,0);  
    rect(this.x, this.y, 100, 100);
    pop();
    push();
    fill(0,255,0);  
    rect(this.x+100, this.y+100, 100, 100);
    pop();
    push();
    fill(0,0,255);
    rect(this.x+200, this.y+200, 100, 100);
  }
}