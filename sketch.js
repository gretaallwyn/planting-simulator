gameState="home"

function preload(){
    homeScreen = loadImage("Home page/ps bg home screen.jpg")
    screen2=loadImage("planting game bg/wet soil bg.jpg")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    

    screen2Page = createSprite(width/2,height/2,width,height);
    screen2Page.addImage(screen2);
    screen2Page.scale =4;

    homePage = createSprite(width/2,height/2,width,height);
    homePage.addImage(homeScreen);
    homePage.scale = 4

    play=createSprite(width/2, height -50);

    water=createSprite(width/4, height/4);

    crop=createSprite(width/2+300, height /2-100);
        crop1=createSprite(50,50,20,20);
        crop1.visible=false;
    water.visible=false;
    crop.visible=false;
}
function draw(){
    background(0);

    if (mousePressedOver(play) && gameState==="home"){
        homePage.visible=false;
        play.visible=false;
        gameState="wetSoil";
        crop.visible=true;
        water.visible=true;
    }
    

    if (mousePressedOver(crop) && gameState==="wetSoil"){
        console.log("crop");
        crop1.visible=true;
    }

    drawSprites();
    
    if (mousePressedOver(water) && gameState==="wetSoil"){
        gameState="water";
       
        //return false;
        //gameState="wetfarm";
    }
    if(gameState=="water"){
        for(var i=200; i<1300; i=i+200){
            stroke("blue");
            strokeWeight(20);
            console.log("line")
            line(i,100,i,600);
           
        }
        for(var i=100; i<650; i=i+100){
            stroke("blue");
            strokeWeight(20);
            console.log("line")
            line(200,i,1200,i);
           
        }
    }

    textSize(30);
    text(mouseX+","+mouseY,mouseX,mouseY);
}
