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


var gameTitle = new PIXI.Text("Project 4: Final\nGreasers & Mushrooms\n They're back and mushroomier than ever");
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
    .add("Powerup.wav")
    .add("mushroomdeath.wav")
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
var comb1;
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
    Powerup =PIXI.audioManager.getAudio("Powerup.wav");
    mushroomdeath =PIXI.audioManager.getAudio("mushroomdeath.wav");
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
     mushroom10 = world.getObject("mushroom10");
     mushroom11 = world.getObject("mushroom11");
     mushroom12 = world.getObject("mushroom12");
     mushroom13 = world.getObject("mushroom13");
     mushroom14 = world.getObject("mushroom14");
     mushroom15 = world.getObject("mushroom15");
     mushroom16 = world.getObject("mushroom16");
     mushroom17 = world.getObject("mushroom17");
     mushroom18 = world.getObject("mushroom18");
     mushroom19 = world.getObject("mushroom19");
     mushroom20 = world.getObject("mushroom20");
     mushroom21 = world.getObject("mushroom21");
     mushroom22 = world.getObject("mushroom22");
     mushroom23 = world.getObject("mushroom23");
     mushroom24 = world.getObject("mushroom24");
     mushroom25 = world.getObject("mushroom25");
     mushroom26 = world.getObject("mushroom26");
     mushroom27 = world.getObject("mushroom27");
     mushroom28 = world.getObject("mushroom28");
     mushroom29 = world.getObject("mushroom29");
     mushroom30 = world.getObject("mushroom30");
     mushroom32 = world.getObject("mushroom32");
     mushroom33 = world.getObject("mushroom33");
     mushroom34 = world.getObject("mushroom34");
     boss1 = world.getObject("boss");
     coin = world.getObject("coin");
     coin1 = world.getObject("coin1");
     coin2 = world.getObject("coin2");
     coin3 = world.getObject("coin3");
     coin4 = world.getObject("coin4");
     coin5 = world.getObject("coin5");
     coin6 = world.getObject("coin6");
     coin7 = world.getObject("coin7");
     comb1 = world.getObject("comb1");
     comb2 = world.getObject("comb2");
     gel1 = world.getObject("gel1");
     gel2 = world.getObject("gel2");
     pop1 = world.getObject("pop1");
     pop2 = world.getObject("pop2");
     shades1 = world.getObject("shades1");
     shades2 = world.getObject("shades2");
     dolla1 = world.getObject("dolla1");
     dolla2 = world.getObject("dolla2");
     check1 = world.getObject("check1");
     check2 = world.getObject("check2");
     check3 = world.getObject("check3");
     check4 = world.getObject("check4");
     check5 = world.getObject("check5");
     mushroom4 = world.getObject("mushroom4");
     mushroom = world.getObject("mushroom");
     princess = world.getObject("mushroom5");


///////////////////////////////creates a mushroom


    v = PIXI.Texture.fromImage("mushroom1.png");
    prin=new PIXI.Sprite(v);
    prin.position.x=princess.x;
    prin.position.y=princess.y;
    prin.anchor.x = 0.5;
    prin.anchor.y = .3;

///////////////////////////////////////////////

///////////////////////////////////creates coins

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
////////////////////////////////////////////////////////

/////////////////////////////////////creates items

    j = PIXI.Texture.fromImage("comb.png");
    comb=new PIXI.Sprite(j);
    comb.position.x=comb1.x;
    comb.position.y=comb1.y;
    comb.anchor.x = 0.5;
    comb.anchor.y = .3;

    j1 = PIXI.Texture.fromImage("comb.png");
    comb1=new PIXI.Sprite(j);
    comb1.position.x=comb2.x;
    comb1.position.y=comb2.y;
    comb1.anchor.x = 0.5;
    comb1.anchor.y = .3;

    d = PIXI.Texture.fromImage("gel.png");
    gely = new PIXI.Sprite(d);
    gely.position.x=gel1.x;
    gely.position.y=gel1.y;
    gely.anchor.x = 0.5;
    gely.anchor.y = .3;

    d1 = PIXI.Texture.fromImage("gel.png");
    gely1 = new PIXI.Sprite(d);
    gely1.position.x=gel2.x;
    gely1.position.y=gel2.y;
    gely1.anchor.x = 0.5;
    gely1.anchor.y = .3;

    h = PIXI.Texture.fromImage("shades.png");
    shady1 = new PIXI.Sprite(h);
    shady1.position.x=shades1.x;
    shady1.position.y=shades1.y;
    shady1.anchor.x = 0.5;
    shady1.anchor.y = .3;

    h1 = PIXI.Texture.fromImage("shades.png");
    shady2 = new PIXI.Sprite(h);
    shady2.position.x=shades2.x;
    shady2.position.y=shades2.y;
    shady2.anchor.x = 0.5;
    shady2.anchor.y = .3;

    s = PIXI.Texture.fromImage("pop.png");
    popy1 = new PIXI.Sprite(s);
    popy1.position.x=pop1.x;
    popy1.position.y=pop1.y;
    popy1.anchor.x = 0.5;
    popy1.anchor.y = .3;

    s1 = PIXI.Texture.fromImage("pop.png");
    popy2 = new PIXI.Sprite(s);
    popy2.position.x=pop2.x;
    popy2.position.y=pop2.y;
    popy2.anchor.x = 0.5;
    popy2.anchor.y = .3;


    w = PIXI.Texture.fromImage("dolla.png");
    dollay1 = new PIXI.Sprite(w);
    dollay1.position.x=dolla1.x;
    dollay1.position.y=dolla1.y;
    dollay1.anchor.x = 0.5;
    dollay1.anchor.y = .3;

    w1 = PIXI.Texture.fromImage("dolla.png");
    dollay2 = new PIXI.Sprite(w);
    dollay2.position.x=dolla2.x;
    dollay2.position.y=dolla2.y;
    dollay2.anchor.x = 0.5;
    dollay2.anchor.y = .3;
//////////////////////////////
/////////////check marks

    z = PIXI.Texture.fromImage("check.png");
    checky1 = new PIXI.Sprite(z);
    checky1.visible=0;
    checky1.position.x=check1.x;
    checky1.position.y=check1.y;
    checky1.anchor.x = 0.5;
    checky1.anchor.y = .3;

    z1 = PIXI.Texture.fromImage("check.png");
    checky2 = new PIXI.Sprite(z);
    checky2.visible=0;
    checky2.position.x=check2.x;
    checky2.position.y=check2.y;
    checky2.anchor.x = 0.5;
    checky2.anchor.y = .3;

    z2 = PIXI.Texture.fromImage("check.png");
    checky3 = new PIXI.Sprite(z);
    checky3.visible=0;
    checky3.position.x=check3.x;
    checky3.position.y=check3.y;
    checky3.anchor.x = 0.5;
    checky3.anchor.y = .3;

    z3 = PIXI.Texture.fromImage("check.png");
    checky4 = new PIXI.Sprite(z);
    checky4.visible=0;
    checky4.position.x=check4.x;
    checky4.position.y=check4.y;
    checky4.anchor.x = 0.5;
    checky4.anchor.y = .3;

    z4 = PIXI.Texture.fromImage("check.png");
    checky5 = new PIXI.Sprite(z);
    checky5.visible=0;
    checky5.position.x=check5.x;
    checky5.position.y=check5.y;
    checky5.anchor.x = 0.5;
    checky5.anchor.y = .3;


//////////////////////////////////////////////////////////////////////

/////////////////////////////////////////some mushrooms


    r = PIXI.Texture.fromImage("mushroom1.png");
    mush3=new PIXI.Sprite(v);
    mush3.position.x=mushroom3.x;
    mush3.position.y=mushroom3.y;
    mush3.anchor.x = 0.5;
    mush3.anchor.y = .3;

    o = PIXI.Texture.fromImage("mushroom1.png");
    mush4=new PIXI.Sprite(v);
    mush4.position.x=mushroom4.x;
    mush4.position.y=mushroom4.y;
    mush4.anchor.x = 0.5;
    mush4.anchor.y = .3;


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


/////////////////////////////////////////////////////////////////////

//////////////////////////////////creates the boss mushroom

    k = PIXI.Texture.fromImage("boss.png");
    boss = new PIXI.Sprite(k);
    boss.position.x=boss1.x;
    boss.position.y=boss1.y;
    boss.anchor.x = 0.5;
    boss.anchor.y = .3;

/////////////////////////////////////////////////////////////////////////

////////////////////////////////creates more mushrooms


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
    mush9.rotation = 3;

    q5= PIXI.Texture.fromImage("mushroom1.png");
    mush10= new PIXI.Sprite(q);
    mush10.position.x=mushroom10.x;
    mush10.position.y=mushroom10.y;
    mush10.anchor.x = 0.5;
    mush10.anchor.y = .3;
    mush10.rotation = 3;

    q6= PIXI.Texture.fromImage("mushroom1.png");
    mush11= new PIXI.Sprite(q);
    mush11.position.x=mushroom11.x;
    mush11.position.y=mushroom11.y;
    mush11.anchor.x = 0.5;
    mush11.anchor.y = .3;
    mush11.rotation = 3;

    q7= PIXI.Texture.fromImage("mushroom1.png");
    mush12= new PIXI.Sprite(q);
    mush12.position.x=mushroom12.x;
    mush12.position.y=mushroom12.y;
    mush12.anchor.x = 0.5;
    mush12.anchor.y = .3;
    mush12.rotation = 3;

    q8= PIXI.Texture.fromImage("mushroom1.png");
    mush13= new PIXI.Sprite(q);
    mush13.position.x=mushroom13.x;
    mush13.position.y=mushroom13.y;
    mush13.anchor.x = 0.5;
    mush13.anchor.y = .3;
    mush13.rotation = 3;


    q9= PIXI.Texture.fromImage("mushroom1.png");
    mush14= new PIXI.Sprite(q);
    mush14.position.x=mushroom14.x;
    mush14.position.y=mushroom14.y;
    mush14.anchor.x = 0.5;
    mush14.anchor.y = .3;
    mush14.rotation = 3;


    q10= PIXI.Texture.fromImage("mushroom1.png");
    mush15= new PIXI.Sprite(q);
    mush15.position.x=mushroom15.x;
    mush15.position.y=mushroom15.y;
    mush15.anchor.x = 0.5;
    mush15.anchor.y = .3;
    mush15.rotation = 3;

    q11= PIXI.Texture.fromImage("mushroom1.png");
    mush16= new PIXI.Sprite(q);
    mush16.position.x=mushroom16.x;
    mush16.position.y=mushroom16.y;
    mush16.anchor.x = 0.5;
    mush16.anchor.y = .3;
    mush16.rotation = 3;

    q12= PIXI.Texture.fromImage("mushroom1.png");
    mush17= new PIXI.Sprite(q);
    mush17.position.x=mushroom17.x;
    mush17.position.y=mushroom17.y;
    mush17.anchor.x = 0.5;
    mush17.anchor.y = .3;
    mush17.rotation = 3;

    q13= PIXI.Texture.fromImage("mushroom1.png");
    mush18= new PIXI.Sprite(q);
    mush18.position.x=mushroom18.x;
    mush18.position.y=mushroom18.y;
    mush18.anchor.x = 0.5;
    mush18.anchor.y = .3;
    mush18.rotation = 3;

    q14= PIXI.Texture.fromImage("mushroom1.png");
    mush19= new PIXI.Sprite(q);
    mush19.position.x=mushroom19.x;
    mush19.position.y=mushroom19.y;
    mush19.anchor.x = 0.5;
    mush19.anchor.y = .3;
    mush19.rotation = 3;

    q15= PIXI.Texture.fromImage("mushroom1.png");
    mush20= new PIXI.Sprite(q);
    mush20.position.x=mushroom20.x;
    mush20.position.y=mushroom20.y;
    mush20.anchor.x = 0.5;
    mush20.anchor.y = .3;
    mush20.rotation = 3;

    q16= PIXI.Texture.fromImage("mushroom1.png");
    mush21= new PIXI.Sprite(q);
    mush21.position.x=mushroom21.x;
    mush21.position.y=mushroom21.y;
    mush21.anchor.x = 0.5;
    mush21.anchor.y = .3;
    mush21.rotation = 3;

    q17= PIXI.Texture.fromImage("mushroom1.png");
    mush22= new PIXI.Sprite(q);
    mush22.position.x=mushroom22.x;
    mush22.position.y=mushroom22.y;
    mush22.anchor.x = 0.5;
    mush22.anchor.y = .3;
    mush22.rotation = 3;

    q18= PIXI.Texture.fromImage("mushroom1.png");
    mush23= new PIXI.Sprite(q);
    mush23.position.x=mushroom23.x;
    mush23.position.y=mushroom23.y;
    mush23.anchor.x = 0.5;
    mush23.anchor.y = .3;
    mush23.rotation = 3;

    q19= PIXI.Texture.fromImage("mushroom1.png");
    mush24= new PIXI.Sprite(q);
    mush24.position.x=mushroom24.x;
    mush24.position.y=mushroom24.y;
    mush24.anchor.x = 0.5;
    mush24.anchor.y = .3;
    mush24.rotation = 3;

    q20= PIXI.Texture.fromImage("mushroom1.png");
    mush25= new PIXI.Sprite(q);
    mush25.position.x=mushroom25.x;
    mush25.position.y=mushroom25.y;
    mush25.anchor.x = 0.5;
    mush25.anchor.y = .3;
    mush25.rotation = 3;

    q21= PIXI.Texture.fromImage("mushroom1.png");
    mush26= new PIXI.Sprite(q);
    mush26.position.x=mushroom26.x;
    mush26.position.y=mushroom26.y;
    mush26.anchor.x = 0.5;
    mush26.anchor.y = .3;
    mush26.rotation = 3;

    q22= PIXI.Texture.fromImage("mushroom1.png");
    mush27= new PIXI.Sprite(q);
    mush27.position.x=mushroom27.x;
    mush27.position.y=mushroom27.y;
    mush27.anchor.x = 0.5;
    mush27.anchor.y = .3;

    q23= PIXI.Texture.fromImage("mushroom1.png");
    mush28= new PIXI.Sprite(q);
    mush28.position.x=mushroom28.x;
    mush28.position.y=mushroom28.y;
    mush28.anchor.x = 0.5;
    mush28.anchor.y = .3;

    q24= PIXI.Texture.fromImage("mushroom1.png");
    mush29= new PIXI.Sprite(q);
    mush29.position.x=mushroom29.x;
    mush29.position.y=mushroom29.y;
    mush29.anchor.x = 0.5;
    mush29.anchor.y = .3;

    q25= PIXI.Texture.fromImage("mushroom1.png");
    mush30= new PIXI.Sprite(q);
    mush30.position.x=mushroom30.x;
    mush30.position.y=mushroom30.y;
    mush30.anchor.x = 0.5;
    mush30.anchor.y = .3;


    q27= PIXI.Texture.fromImage("mushroom1.png");
    mush32= new PIXI.Sprite(q);
    mush32.position.x=mushroom32.x;
    mush32.position.y=mushroom32.y;
    mush32.anchor.x = 0.5;
    mush32.anchor.y = .3;

    q28= PIXI.Texture.fromImage("mushroom1.png");
    mush33= new PIXI.Sprite(q);
    mush33.position.x=mushroom33.x;
    mush33.position.y=mushroom33.y;
    mush33.anchor.x = 0.5;
    mush33.anchor.y = .3;

    q29= PIXI.Texture.fromImage("mushroom1.png");
    mush34= new PIXI.Sprite(q);
    mush34.position.x=mushroom34.x;
    mush34.position.y=mushroom34.y;
    mush34.anchor.x = 0.5;
    mush34.anchor.y = .3;
////////////////////////////////////////////////////////////////////////////


///////////////////////////creates the main greaser

    blob = new PIXI.extras.MovieClip(frames);
    blob.scale.y=1;
    blob.scale.x=1;
    blob.anchor.x = 0.5;
    blob.anchor.y = 0.3;
    blob.position.x=start.x;
    blob.position.y=start.y;
    blob.animationSpeed=.1;
///////////////////////////////////////////////////////////////////////////

/////////////////////creates the finish image

    var c = PIXI.Texture.fromImage("finishline.png");
    castley = new PIXI.Sprite(c);
    castley.position.x=cast.x;
    castley.position.y=cast.y;
    castley.anchor.x = 0.5;
    castley.anchor.y = 0;

/////////////////////////////////////////////////////////////////////////

////////////////adds the objects to the game

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
    entity_layer.addChild(comb)
    entity_layer.addChild(comb1)
    entity_layer.addChild(gely)
    entity_layer.addChild(gely1)
    entity_layer.addChild(popy1)
    entity_layer.addChild(popy2)
    entity_layer.addChild(shady1)
    entity_layer.addChild(shady2)
    entity_layer.addChild(dollay1)
    entity_layer.addChild(dollay2)
    entity_layer.addChild(checky1)
    entity_layer.addChild(checky2)
    entity_layer.addChild(checky3)
    entity_layer.addChild(checky4)
    entity_layer.addChild(checky5)
    entity_layer.addChild(mush)
    entity_layer.addChild(mush6)
    entity_layer.addChild(mush7)
    entity_layer.addChild(mush8)
    entity_layer.addChild(mush9)
    entity_layer.addChild(mush10)
    entity_layer.addChild(mush11)
    entity_layer.addChild(mush12)
    entity_layer.addChild(mush13)
    entity_layer.addChild(mush14)
    entity_layer.addChild(mush15)
    entity_layer.addChild(mush16)
    entity_layer.addChild(mush17)
    entity_layer.addChild(mush18)
    entity_layer.addChild(mush19)
    entity_layer.addChild(mush20)
    entity_layer.addChild(mush21)
    entity_layer.addChild(mush22)
    entity_layer.addChild(mush23)
    entity_layer.addChild(mush24)
    entity_layer.addChild(mush25)
    entity_layer.addChild(mush26)
    entity_layer.addChild(mush27)
    entity_layer.addChild(mush28)
    entity_layer.addChild(mush29)
    entity_layer.addChild(mush30)
    entity_layer.addChild(mush32)
    entity_layer.addChild(mush33)
    entity_layer.addChild(mush34)

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
//////////////////////////collisions with mushrooms


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


///////////////////////////collisions for coins

    if(Math.abs(blob.position.y-coiny.position.y)<15&& Math.abs(blob.position.x-coiny.position.x)<15) {
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
///////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// collisions for items


    if(Math.abs(blob.position.x-gely.position.x)<20) {
        gely.visible=0;
        checky1.visible=1;
        Powerup.play();
    }

    if(Math.abs(blob.position.x-comb.position.x)<20) {
        comb.visible=0;
        checky5.visible=1;
        Powerup.play();
    }

    if(Math.abs(blob.position.x-shady1.position.x)<20) {
        shady1.visible=0;
        checky2.visible=1;
        Powerup.play();
    }

    if(Math.abs(blob.position.x-popy1.position.x)<20) {
        popy1.visible=0;
        checky3.visible=1;
        Powerup.play();
    }

    if(Math.abs(blob.position.x-dollay1.position.x)<20) {
        dollay1.visible=0;
        checky4.visible=1;
        Powerup.play();
    }

///////////////////////////////////////////////////////////////////////////////////
////////////////////////////creates collisions for evil mushroom

    if(Math.abs(blob.position.x-boss.position.x)<20) {
        boss.visible=0;
        mushroomdeath.play();
    }

//////////////////////////////////////////////////////////////////////////////////

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
