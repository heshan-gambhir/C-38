var canvas, backgroundImage;
var player1,player2,player3,player4;
var track;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
 player1=loadImage("images/car1.png");
 player2=loadImage("images/car2.png");
 player3=loadImage("images/car3.png");
 player4=loadImage("images/car4.png");
 track=loadImage("images/track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
if(gameState===2){
game.end();
}
}
