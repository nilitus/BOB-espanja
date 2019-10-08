let mic;

function setup() {
  createCanvas(400, 400);
  background(0);
    
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
  background(0);
    micLevel = mic.getLevel();
    mov = map(micLevel,0,1,10,100);
  
  let boca_w= width/1.75
  noStroke();
  
    console.log(mov);
    

     push();
    //galtes dreta
     
      fill('yellow');
        rect(150+mov*4.5,150,50+mov*4.5,280,10);
         
  //galtes esq    
    
     fill('yellow');
    rect(190/mov*4.5,200,350/mov*6.5,250,10);
    pop();
    
    
    
  push();
  translate(width/2, height/2);
  rectMode(CENTER);
  
  //fons de la boca
  fill('red');
  rect(0,100,boca_w,200);
  
  //llengua
  fill('pink');
  rect(0,150,boca_w,120+mov,10);
  
  
  
  //dents
  fill(255);
  rect(-20,50-mov,50,50,10);
  //vertex(0,200,100);
  fill(255);
  rect(20,40-mov,50,50,10);
    fill(255);
  rect(-70,-90+mov*7.4,40,100,10);
    fill(255);
  rect(70,-110+mov*9.5,40,100,10);
  
  
  //barbeta
  fill('yellow');
  rect(0,330-mov*1.5,boca_w,350+mov+1.5,10);
  pop();
  
  
  //front
   fill('yellow');
  rect(0,0,width, height/1.8+mov+5.5);
  
 
  
  push();
    //cella dret
    noFill();
  stroke(40);
  strokeWeight(10+mov);
 
    arc(300,75,60,60+mov,radians(230+mov),radians(30*mov));
pop();
    push();
    //cella esq
      noFill();
  stroke(40);
  strokeWeight(10+mov);
  arc(100,75,60+mov,60,radians(230+mov),radians(30*mov));
 
    
    pop();
    
     //ull esquerre
  fill(255);
  ellipse(width*0.25,height/3, 40+mov*5.5);
  fill(0);
  ellipse(width*0.25,height/3, 10+mov+5.5);
    //ull dret
    
  fill(255);
  ellipse(width*0.75,height/3, 40+mov*5.5);
  fill(0);
  ellipse(width*0.75,height/3, 10+mov+5.5);
  
  //nas
  noFill();
  stroke(255);
  strokeWeight(10+mov);
  arc(width*0.5,height/1.85,60,60,radians(230),radians(310));
  
    
   
}

function touchStarted(){
    getAudioContext().resume();
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}