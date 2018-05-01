class HRTile extends Tile {
    processData(){
    

//let tiles = [];
//let tileSize = 400;


    
    console.log(this.table.getColumn('What is the perfect day?'));
    let answers = this.table.getColumn('What is the perfect day?');
    this.perfectDayAnswers = [];
    for(var i = 0; i < 15; i ++){
        this.perfectDayAnswers.push(answers[i]);
    }
        
    this.activity = 0;
    this.event = 0;
    this.weather = 0;
    this.food = 0;
        
    for(let i =0; i<=15; i++){
			if (this.perfectDayAnswers[i] === 'A day with plenty of sunlight'){
				this.activity++;
			}
			if (this.perfectDayAnswers[i] ==='event'){
				this.event++;
			}
			if (this.perfectDayAnswers[i] ==='weather'){
				this.weather++;
			}
			if (this.perfectDayAnswers[i] ==='food'){
				this.food++;
			}
		}
    }
        
    
    display() {
      
        
        super.display();
        
        //background
        for( let i= 0 ; i <= width; i = i +50){
            fill(255);
            rect(10, 10, 10, height);
            rect(10, 10, width, 10);
        }
        
        //A day with great weaather
        
         for (let i = 0; i <= this.weather; i++){
            push(); 
            fill(255,255,0);
            translate(width/2, height/2);
            ellipse(0,0, 100, 100);
            pop();
         }
        //sunrays
        

        for (var s = 0; s < 8; s++) {
		push();
        translate(width/2, height/2);
        fill(255,255,0);
		rotate(TWO_PI * s / 8);
		translate(120, 0);
        text('Beautiful day',13, 3);
		ellipse(0, 0, 20, 20);
            
        pop();
        
		for (var sr = 0; sr < 12; sr++) {
			push();
			rotate(frameCount * sr / 12);
			ellipse(0, 0, 8, 8);
			pop();
		}		
	}

         //Dont have to use my AK
        
        for (let i = 0; i <= this.activity; i++){
            fill(0);
            var x = 25;
            var h = 10;
            //stock
            text('Dont have to use my AK', x*2, x*1.5);
            rect(x*2, h*5, 10,40);
            //handle
            rect(x*3.2, h*5, 5,40);
            //bump
            rect(x*2, 55, 25,10);
            //chamber
            rect(x*2, 55, 25,10);
            //barrel
            rect(x*3, h*5, 50, 25);
            rect(x*3, 52, 70, 10);
        
        }
        
        //Birthday cake
        
         for (let i = 0; i <= this.event; i++){
            fill(255);
            stroke(0);
            ellipse(x*6,x*14,50,50);
            fill(random(255,255,255));
            fill(255,0,0);
             rect(x*5,x*13, 5,20);
             rect(x*6,x*13, 5,20);
             rect(x*5.5,x*12.7, 5,20);
               rect(x*6.6,x*12.7, 5,20);
            //candles
             
        }
   
    }
        
   

}

    

