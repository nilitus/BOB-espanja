let mic;

function setup() {
  createCanvas(windowWidth,windowHeight);
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
  translate(width/2, height/2);
  rectMode(CENTER);
  
  //fons de la boca
  fill('red');
  rect(0,100,boca_w,200);
  
  //llengua
  fill('pink');
  rect(width,150,500,100+mov,10);
  
  
  
  //dents
  fill(255);
  rect(-20,80-mov,50,50,10);
  //vertex(0,200,100);
  fill(255);
  rect(20,90-mov,50,50,10);
    fill(255);
  rect(-70,-50+mov*7.4,40,100,10);
    fill(255);
  rect(70,-70+mov*9.5,40,100,10);
  
  
  //barbeta
  fill('yellow');
  rect(0,400-mov*9.5,boca_w,250+mov+3.5,10);
  pop();
  
  
  //front
 fill('yellow');
 rect(0,0,width, height/1.8+mov+5.5);
 
 
  

    
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