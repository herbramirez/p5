//Daniel Shiffman Nature of Code CH 6 

var atom;
var s;

function setup() {
    createCanvas(1500,1500);
     rectMode(CENTER);
    atom = new Atom(0,0);
    
    s = 3*random(0,10);
}


function Atom(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 1;
  this.maxforce = 0.9;
    
    this.applyForce = function(force) {
        this.acc.add(force);
     }
    
    this.arrive = function(target) {
        
        var desired = p5.Vector.sub(target, this.pos);
        
      //  desired.setMag(this.maxspeed);
        
        var d = desired.mag();
        
        if (d<50){
            
            var m = map(d,0,50,0, this.maxspeed);
            desired.setMag(m);
        } else{
            desired.setMag(this.maxspeed)
            
        }
        
        
        var steering = p5.Vector.sub(desired, this.vel);
        steering.limit(this.maxforce);
        
        this.applyForce(steering);
    }
    
    this.update = function (){
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }
   
    this.display = function() {
        fill(255);
        stroke(255);
        push();
        translate(width/2,height/2);
        rotate(radians(frameCount*10));
        rect(this.pos.x, this.pos.y, 100+s, 100+s);
        pop();         
}
}

    
       
function draw(){
    background(0);
    
   // for(var i = 0; i.length; i++){
        

    
    var target = createVector(mouseX, mouseY);
    atom.arrive(target);
    
    atom.update();
    atom.display();
    }

function mousePressed() {
    
    s = s + random(0,150);
}


