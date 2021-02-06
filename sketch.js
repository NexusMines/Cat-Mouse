var canvas,bg;
var tom, tomImage1,tomImage2;
var jerry, jerryImage1,jerryImage2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImage1= loadAnimation("images/cat1.png");
    tomImage2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3= loadAnimation("images/cat4.png");
    jerryImage1=loadAnimation("images/mouse1.png");
    jerryImage2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImage3=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSitting", tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImage1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tom", tomImage3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tom");
        jerry.addAnimation("jerry", jerryImage3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerry");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === RIGHT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImage2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryStanding2", jerryImage2);

        jerry.changeAnimation("jerryStanding2");
    }
}