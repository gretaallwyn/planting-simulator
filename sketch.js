function preload(){
    homeScreen = loadImage("Home page/ps bg home screen.jpg")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    homePage = createSprite(width/2,height/2,width,height);
    homePage.addImage(homeScreen);
    homePage.scale = 4
}
function draw(){
    background(0);
    drawSprites();
}