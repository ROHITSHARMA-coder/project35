var hotairball;

var database;

function preload(){
  hotairball1=loadImage("HotAirBallon-01.png")
  hotairball2=loadImage("HotAirBallon-02.png")
  
}
function setup(){
    database=firebase.database();

    createCanvas(500,500);

    hotairball = createSprite(250,250,10,10);
    hotairball.shapeColor = "red";

    var hotairballpos=database.ref('hotairball/height');
    hotairballpos.on("value",readposition, showError)

}

function draw(){

    background("white");

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    drawSprites();

}

function changePosition(x,y){

database.ref('hotairball/position').set({
    
    'x': position.x+x,
    'y': position.y+y

})
    
}

function readposition(data){
position=data.val();
hotairball.x=position.x
hotairball.y=position.y


}
