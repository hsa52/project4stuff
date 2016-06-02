var GAME_WIDTH =720;
var GAME_HEIGHT=400;
var GAME_SCALE =1;

var gameport =document.getElementById("gameport");
var renderer= new PIXI.autoDetectRenderer(GAME_WIDTH,GAME_HEIGHT,{backgroundColor:0x00ff00});
var world;

gameport.appendChild(renderer.view);
var stage = new PIXI.Container();
stage.scale.x = GAME_SCALE;
stage.scale.y = GAME_SCALE;
var titlescreen = new PIXI.Container();
var endWin = new PIXI.Container();
var endLose = new PIXI.Container();
endWin.visible=0;
endLose.visible=0;


var gameTitle = new PIXI.Text("Project 3: Tiles\nGreasers and Mushrooms is what this game is about");
gameTitle.anchor.x=.5;
gameTitle.anchor.y=.5;
gameTitle.position.x=360;
gameTitle.position.y=100;
titlescreen.addChild(gameTitle);
titlescreen.visible=1;
var title = new PIXI.Text("Click Here If You Wish To Play");
title.position.x=360;
title.position.y=200;
title.anchor.x=.5;
title.anchor.y=.5;
title.interactive=true;
title.on('mousedown',mousehandler);
function mousehandler(){
    world.visible=1;
    titlescreen.visible=0;
    startingsound.play();

}
titlescreen.addChild(title);

stage.addChild(titlescreen);


var loseText = new PIXI.Text("You Lose!");
loseText.anchor.x=.5;
loseText.anchor.y=.5;
loseText.position.x=360;
loseText.position.y=200;
var playAgain = new PIXI.Text("Play Again?");
playAgain.anchor.x=.5;
playAgain.anchor.y=.5;
playAgain.position.x=360;
playAgain.position.y=300;
playAgain.interactive=true;
playAgain.on('mousedown',startNewGame2);
function startNewGame2(){
    world.visible=1;
    endLose.visible=0;
    endWin.visible=0;
    prin.visible=1;


}
endLose.addChild(loseText);
endLose.addChild(playAgain);
stage.addChild(endLose);



var winText= new PIXI.Text("You Win!");
winText.anchor.x=.5;
winText.anchor.y=.5;
winText.position.x=360;
winText.position.y=200;
var playAgain2 = new PIXI.Text("Play Again?");
playAgain2.anchor.x=.5;
playAgain2.anchor.y=.5;
playAgain2.position.x=360;
playAgain2.position.y=300;
playAgain2.interactive=true;
playAgain2.on('mousedown',startNewGame);
function startNewGame(){

    world.visible=1;
    endLose.visible=0;
    endWin.visible=0;
    prin.visible=1;
}
endWin.addChild(winText);
endWin.addChild(playAgain2);
stage.addChild(endWin);

PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
PIXI.loader
    .add('map_json','map.json')
    .add('tileset','tileset.png')
    .add("greaser.json")
    .add('blob','blob.png')
    .add("greaser2.json")
    .add("Hit_Hurt.wav")
    .add("jumping.wav")
    .add("winner.wav")
    .add("starting.wav")
    .add("coinpick.wav")

    .load(ready);
var frames=[];
var frames2=[];
var timer;
var blob;
var castley;
var start;
var cast;
var hithurt;
var jumping;
var starting;
var boss1;
var endingsound;
var mushroom1;
var mushroom2;
var mushroom3;
var mushroom4;
var princess;
function ready(){
    var tu = new TileUtilities(PIXI);
    world = tu.makeTiledWorld("map_json","tileset.png");
    stage.addChild(world);
    world.visible=0;
    hithurt =PIXI.audioManager.getAudio("Hit_Hurt.wav");
    jumping =PIXI.audioManager.getAudio("jumping.wav");
    endingsound =PIXI.audioManager.getAudio("winner.wav");
    startingsound =PIXI.audioManager.getAudio("starting.wav");
    coinpick =PIXI.audioManager.getAudio("coinpick.wav");

    for (i=1;i<=6;i++){
        frames.push(PIXI.Texture.fromFrame("runner"+i+".png"));

    }
    var j;
    for (i=12;i<=17;i++){
        j=i+1;
        frames2.push(PIXI.Texture.fromFrame("runner"+i+".png"));
    }
    //getting objects from json map file
     start = world.getObject("start");
     cast = world.getObject("castle");
     mushroom2 = world.getObject("mushroom2");
     mushroom3 = world.getObject("mushroom3");
     mushroom1 = world.getObject("mushroom1");
     mushroom6 = world.getObject("mushroom6");
     mushroom7 = world.getObject("mushroom7");
     mushroom8 = world.getObject("mushroom8");
     mushroom9 = world.getObject("mushroom9");
     boss1 = world.getObject("boss");
     coin = world.getObject("coin");
     coin1 = world.getObject("coin1");
     coin2 = world.getObject("coin2");
     coin3 = world.getObject("coin3");
     coin4 = world.getObject("coin4");
     coin5 = world.getObject("coin5");
     coin6 = world.getObject("coin6");
     coin7 = world.getObject("coin7");


     mushroom4 = world.getObject("mushroom4");
     mushroom = world.getObject("mushroom");
     princess = world.getObject("mushroom5");

    v = PIXI.Texture.fromImage("mushroom1.png");
    //princess sprite
    prin=new PIXI.Sprite(v);
    prin.position.x=princess.x;
    prin.position.y=princess.y;
    prin.anchor.x = 0.5;
    prin.anchor.y = .3;

    b = PIXI.Texture.fromImage("coin.png");
    coiny = new PIXI.Sprite(b);
    coiny.position.x=coin.x;
    coiny.position.y=coin.y;
    coiny.anchor.x = 0.5;
    coiny.anchor.y = .3;

    b1 = PIXI.Texture.fromImage("coin.png");
    coiny1 = new PIXI.Sprite(b);
    coiny1.position.x=coin1.x;
    coiny1.position.y=coin1.y;
    coiny1.anchor.x = 0.5;
    coiny1.anchor.y = .3;

    b2 = PIXI.Texture.fromImage("coin.png");
    coiny2 = new PIXI.Sprite(b);
    coiny2.position.x=coin2.x;
    coiny2.position.y=coin2.y;
    coiny2.anchor.x = 0.5;
    coiny2.anchor.y = .3;

    b3 = PIXI.Texture.fromImage("coin.png");
    coiny3 = new PIXI.Sprite(b);
    coiny3.position.x=coin3.x;
    coiny3.position.y=coin3.y;
    coiny3.anchor.x = 0.5;
    coiny3.anchor.y = .3;

    b4 = PIXI.Texture.fromImage("coin.png");
    coiny4 = new PIXI.Sprite(b);
    coiny4.position.x=coin4.x;
    coiny4.position.y=coin4.y;
    coiny4.anchor.x = 0.5;
    coiny4.anchor.y = .3;

    b5 = PIXI.Texture.fromImage("coin.png");
    coiny5 = new PIXI.Sprite(b);
    coiny5.position.x=coin5.x;
    coiny5.position.y=coin5.y;
    coiny5.anchor.x = 0.5;
    coiny5.anchor.y = .3;

    b6 = PIXI.Texture.fromImage("coin.png");
    coiny6 = new PIXI.Sprite(b);
    coiny6.position.x=coin6.x;
    coiny6.position.y=coin6.y;
    coiny6.anchor.x = 0.5;
    coiny6.anchor.y = .3;

    b7 = PIXI.Texture.fromImage("coin.png");
    coiny7 = new PIXI.Sprite(b);
    coiny7.position.x=coin7.x;
    coiny7.position.y=coin7.y;
    coiny7.anchor.x = 0.5;
    coiny7.anchor.y = .3;


    r = PIXI.Texture.fromImage("mushroom1.png");
    //princess sprite
    mush3=new PIXI.Sprite(v);
    mush3.position.x=mushroom3.x;
    mush3.position.y=mushroom3.y;
    mush3.anchor.x = 0.5;
    mush3.anchor.y = .3;

    o = PIXI.Texture.fromImage("mushroom1.png");
    //princess sprite
    mush4=new PIXI.Sprite(v);
    mush4.position.x=mushroom4.x;
    mush4.position.y=mushroom4.y;
    mush4.anchor.x = 0.5;
    mush4.anchor.y = .3;


    //evil boyyfriend object
    f= PIXI.Texture.fromImage("mushroom1.png");
    mush2= new PIXI.Sprite(f);
    mush2.position.x=mushroom2.x;
    mush2.position.y=mushroom2.y;
    mush2.anchor.x = 0.5;
    mush2.anchor.y = .3;

    t= PIXI.Texture.fromImage("mushroom1.png");
    mush1= new PIXI.Sprite(t);
    mush1.position.x=mushroom1.x;
    mush1.position.y=mushroom1.y;
    mush1.anchor.x = 0.5;
    mush1.anchor.y = .3;


    k = PIXI.Texture.fromImage("boss.png");
    boss = new PIXI.Sprite(k);
    boss.position.x=boss1.x;
    boss.position.y=boss1.y;
    boss.anchor.x = 0.5;
    boss.anchor.y = .3;


    q= PIXI.Texture.fromImage("mushroom1.png");
    mush= new PIXI.Sprite(q);
    mush.position.x=mushroom.x;
    mush.position.y=mushroom.y;
    mush.anchor.x = 0.5;
    mush.anchor.y = .3;

    q1= PIXI.Texture.fromImage("mushroom1.png");
    mush6= new PIXI.Sprite(q);
    mush6.position.x=mushroom6.x;
    mush6.position.y=mushroom6.y;
    mush6.anchor.x = 0.5;
    mush6.anchor.y = .3;

    q2= PIXI.Texture.fromImage("mushroom1.png");
    mush7= new PIXI.Sprite(q);
    mush7.position.x=mushroom7.x;
    mush7.position.y=mushroom7.y;
    mush7.anchor.x = 0.5;
    mush7.anchor.y = .3;

    q3= PIXI.Texture.fromImage("mushroom1.png");
    mush8= new PIXI.Sprite(q);
    mush8.position.x=mushroom8.x;
    mush8.position.y=mushroom8.y;
    mush8.anchor.x = 0.5;
    mush8.anchor.y = .3;

    q4= PIXI.Texture.fromImage("mushroom1.png");
    mush9= new PIXI.Sprite(q);
    mush9.position.x=mushroom9.x;
    mush9.position.y=mushroom9.y;
    mush9.anchor.x = 0.5;
    mush9.anchor.y = .3;


    //main playable character
    blob = new PIXI.extras.MovieClip(frames);
    blob.scale.y=1;
    blob.scale.x=1;
    blob.anchor.x = 0.5;
    blob.anchor.y = 0.3;
    blob.position.x=start.x;
    blob.position.y=start.y;
    blob.animationSpeed=.1;

    //castle to return princess to
    var c = PIXI.Texture.fromImage("finishline.png");
    castley = new PIXI.Sprite(c);
    castley.position.x=cast.x;
    castley.position.y=cast.y;
    castley.anchor.x = 0.5;
    castley.anchor.y = 0;




    var entity_layer= world.getObject("Entities");
    var building_layer = world.getObject("Buildings");
    entity_layer.addChild(blob);
    building_layer.addChild(castley);
    entity_layer.addChild(mush4);
    entity_layer.addChild(mush3);
    entity_layer.addChild(mush2);
    entity_layer.addChild(mush1);
    entity_layer.addChild(boss)
    entity_layer.addChild(coiny)
    entity_layer.addChild(coiny1)
    entity_layer.addChild(coiny2)
    entity_layer.addChild(coiny3)
    entity_layer.addChild(coiny4)
    entity_layer.addChild(coiny5)
    entity_layer.addChild(coiny6)
    entity_layer.addChild(coiny7)
    entity_layer.addChild(mush)
    entity_layer.addChild(mush6)
    entity_layer.addChild(mush7)
    entity_layer.addChild(mush8)
    entity_layer.addChild(mush9)
    entity_layer.addChild(prin);



    animate();
}
var moving_left = false;
var moving_right=false;
document.addEventListener("keyup",function (e){
    blob.loop=false;
    if(e.keyCode==68){
        moving_right=false;
    }
    if(e.keyCode==65){
        moving_left=false;
    }
    if(blob.currentFrame==0||blob.currentFrame==1){
        blob.gotoAndStop(1);
    }
});


document.addEventListener("keydown",function (e) {
    if(Math.abs(blob.position.x-castley.position.x)<30){
        endingsound.play();
        endWin.visible=1;
        world.visible=0;

    }
    if(Math.abs(blob.position.x-mush2.position.x)<15) {
        world.visible=0;
        loseText.visible=1;
        playAgain.visible=1;
        hithurt.play();

    }
    if(Math.abs(blob.position.x-mush.position.x)<15) {
        world.visible=0;
        loseText.visible=1;
        playAgain.visible=1;
        hithurt.play();

    }
    if(Math.abs(blob.position.x-prin.position.x)<15) {
        world.visible=0;
        loseText.visible=1;
        playAgain.visible=1;
        hithurt.play();
    }

    if(Math.abs(blob.position.x-mush3.position.x)<15) {
        world.visible=0;
        loseText.visible=1;
        playAgain.visible=1;
        hithurt.play();

    }
    if(Math.abs(blob.position.y-coiny.position.y)<15&& Math.abs(blob.position.x-coiny.position.x)<15&& (coiny.visible=1)) {
        coinpick.play();
        coiny.visible=0;
    }

    if(Math.abs(blob.position.y-coiny1.position.y)<10&& Math.abs(blob.position.x-coiny1.position.x)<10) {
        coiny1.visible=0;
        coinpick.play();
    }

    if(Math.abs(blob.position.y-coiny2.position.y)<10&& Math.abs(blob.position.x-coiny2.position.x)<10) {
        coiny2.visible=0;
        coinpick.play();
    }

    if(Math.abs(blob.position.y-coiny3.position.y)<10&& Math.abs(blob.position.x-coiny3.position.x)<10) {
        coiny3.visible=0;
        coinpick.play();
    }

    if(Math.abs(blob.position.y-coiny4.position.y)<10&& Math.abs(blob.position.x-coiny4.position.x)<10) {
        coiny4.visible=0;
        coinpick.play();
    }

    if(Math.abs(blob.position.y-coiny5.position.y)<10&& Math.abs(blob.position.x-coiny5.position.x)<10) {
        coiny5.visible=0;
        coinpick.play();
    }

    if(Math.abs(blob.position.y-coiny6.position.y)<10&& Math.abs(blob.position.x-coiny6.position.x)<10) {
        coiny6.visible=0;
        coinpick.play();
    }

    if(Math.abs(blob.position.y-coiny7.position.y)<10&& Math.abs(blob.position.x-coiny7.position.x)<10) {
        coiny7.visible=0;
        coinpick.play();
    }


    if (blob.position.y==300) {

        if (e.keyCode == 87) {//w Key
            blob.loop = true;
            if (blob.playing == false) {
                blob.gotoAndPlay(0);
            }
            if (moving_left == true) {
                createjs.Tween.get(blob.position).to({x: blob.x - 48, y: blob.y - 48}, 500);
                timer = setTimeout(downleft, 500);
                function downleft() {
                    createjs.Tween.get(blob.position).to({x: blob.x - 48, y: 300}, 500);
                    clearTimeout(timer);
                    jumping.play();
                }
            }
            if (moving_right == true) {
                createjs.Tween.get(blob.position).to({x: blob.x + 48, y: blob.y - 48}, 500);
                timer = setTimeout(downright, 500);

                function downright() {
                    createjs.Tween.get(blob.position).to({x: blob.x + 48, y: 300}, 500);
                    clearTimeout(timer);
                    jumping.play();
                }
            }
            if (moving_left == false && moving_right == false) {
                createjs.Tween.get(blob.position).to({y: blob.y - 48}, 500);
                timer = setTimeout(down, 500);

                function down() {
                    createjs.Tween.get(blob.position).to({y: 300}, 500);
                    clearTimeout(timer);
                    jumping.play();
                }
            }
        }

        if (e.keyCode == 65) {//a key
            blob.loop = true;
            blob.scale.x = -1;
            blob.rotation = 0;

            if (blob.playing == false) {
                blob.gotoAndPlay(3);
            }
            moving_left= true;
            createjs.Tween.get(blob.position).to({x: blob.x - 24}, 500)
        }

        if (e.keyCode == 68) {//d key
            blob.scale.x = 1;
            blob.loop = true;
            blob.rotation = 0;
            if (blob.playing == false) {
                blob.gotoAndPlay(0);
            }
            moving_right = true;
            createjs.Tween.get(blob.position).to({x: blob.x + 24}, 500)
        }


    }
});






function animate(timestamp) {
    requestAnimationFrame(animate);
    update_camera();
    renderer.render(stage);
}

function update_camera() {
    stage.x = -blob.x*GAME_SCALE + GAME_WIDTH/2 - blob.width/2*GAME_SCALE;
    stage.y = -blob.y*GAME_SCALE + GAME_HEIGHT/2 + blob.height/2*GAME_SCALE;
    stage.x = -Math.max(0, Math.min(world.worldWidth*GAME_SCALE - GAME_WIDTH, -stage.x));
    stage.y = -Math.max(0, Math.min(world.worldHeight*GAME_SCALE - GAME_HEIGHT, -stage.y));
}
