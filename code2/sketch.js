var canvas;
var r,g,b;



function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  centerCanvas();
    
///////END OF HTML SETUP///////
///////BEGINNING OF SKETCH//////
    
    w = new Walker();
    
    var r = random(0,255);
    var g = random(0,255);
    var b = random(0,255);

}

function windowResized() {
  centerCanvas();
}

function draw(){
    fill(r,g,b);
    w.walk();
    w.display();
    
}

function Walker(){
    this.x = 0,width;
    this.y = 0,height;
    
    this.walk = function(){
        this.x = this.x + random(-10,10);
        this.y = this.x + random(-10,10);
    }

    this.display = function(){
        fill(r,g,b);
        rect(random(0,width),random(0,height), random(0,100), random(0,150));
    }
    
}
