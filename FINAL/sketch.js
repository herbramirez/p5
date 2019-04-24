var mic;
var song;

/*circles*/
var ec = {
    x: 0,
    y: 100,
    ecx: 200,
    ecy: 200
};



function preload() {
 /* song = loadSound('quixoticdusttodust.mp3');*/
}

function setup(){
  createCanvas(1640,1580);
/*Colors*/   
r = random(255);
g = random(255);
b = random (255);
    
 /*song.play();*/
    
  mic = new p5.AudioIn();
  mic.start();
    
  }

function draw() {
  background(0);
  var vol = mic.getLevel(); 
  
    ellipse(width/2, height/2, vol*ec.x, vol*ec.y);
    fill('yellow')
    
    for (var i = 0; i < 8; i++) {
        
    push();
    translate(width/2, height/2);
    rotate(TWO_PI * i / 8);   
    noFill();
    stroke('white');
    ellipse(ec.y*3, ec.y*2, vol*ec.ecy*4, vol*ec.ecy*4);
    noFill('blue')
    stroke('r,g,b,115');
    rect(width/6,height/6,vol*height*2,vol*width*2)
    ellipse(ec.y*3, ec.ecy, vol*ec.x*4, vol*ec.ecy*2);
    fill('lightgreen');
    ellipse(ec.y*3, ec.ecy, vol*ec.ecy, vol*ec.ecy);
    console.log(vol);
    pop();
        
    }
        
            for (var i = 0; i < 8; i++) {
        
    push();
    translate(width/2, height/2);
    rotate(TWO_PI * i / 6);   
     noFill();
     stroke('lightgreen');
      rotate(frameCount / -90)
     ellipse(ec.y*4, ec.ecy*3, vol*ec.ecy*4, vol*ec.ecy*4);
     ellipse(ec.y*4, ec.ecy*3, vol*ec.ecx*2, vol*ec.ecy*2);
     fill('lightgreen');
     ellipse(ec.y*4, ec.ecy*3, vol*ec.ecy, vol*ec.ecy);
     line(ec.y, ec.ecy*3, vol*ec.ecx*4, vol*ec.ecx*4);
     console.log(vol);
     pop();
                
    }
    
            for (var i = 0; i < 8; i++) {
   
    push();
    translate(width/2, height/2);
    rotate(TWO_PI * i / 8);   
     noFill();
     stroke('lightgreen');
     rotate(frameCount / 300)             
     ellipse(ec.y, ec.ecy, vol*ec.ecx*4, vol*ec.ecx*4);
     ellipse(ec.ecy, ec.ecy, vol*ec.ecx*2, vol*ec.ecy*2);
     fill('lightgreen');
     ellipse(ec.y, ec.ecy, vol*ec.ecy, vol*ec.ecy);
     line(230, 600, vol*810, vol*795);
     pop();
              
     }
}