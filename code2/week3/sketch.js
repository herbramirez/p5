let vehicles = [];


function setup() {
    createCanvas(1000,1000);
    
    let numVehicles = 15;
    for(let i = 0; i <numVehicles; i++) {
        v = new Vehicle(createVector(random(0,width), random(0,height));
                        
        v.color = color(random(255,255,255),random(255,255,255),random(255,255,255));
        v.maxSpeed = rand(1,8);
        
        vehicles.push(v);
      
    
    }
}
    
       
function draw(){
    background(0);
    fill(255);

    fill(200);
    stroke(0);
    strokeWeight(2);
    ellipse(mouseX,mouseY,49,48);
    
    
    //update and display vehicle
    for( let v of vehicle);
    v.seek(createVector(mouseX,mouseY));
    v.update();
    v.display();
    
    }
}


//function Firework() {
//    this.pos = createVector(width/2, height/2);
//    
//    
//    this.explosion = function() {
//        this.vel = createVector(random(-10,10), random(-10,10));
//        this.pos = this.pos.add(this.vel);
//        
//    }
//    
//    this.display function (){
//        fill(0);
//        ellipse(this.pos.x, this.pos.y, 50,50);
//    }
//    
//}