//Business Logic//
var firstPlayer;
var secondPlayer;
var diceRoll;
var totalScore= 0;
    function User (name){
      this.name= name;
      this.score = 0;
    }
    User.prototype.addScore= function(score) {
    return this.score+=score;

    function diceValue(){
   diceValue= Math.floor((Math.random()*6)+1);
    if (diceRoll== 1){
     totalScore=0;
     alert("You rolled a 1" + "." + " Pass the mouse to the next player!")
      return false ;
    }

    else {
    totalScore+=rollValue
    console.log(totalScore)
    }

    return totalScore
    }
    function hold(Player,score){
   Player.addScore(score);
   totalScore=0;
   return true
    }
 function getPlayers(new1, new2){
   play1=new Player(new1);
   play2=new Player(new2);
    }























//User Interface//
$(document).ready (function () {
  $ ("form#names").submit(function(event) {
    event.preventDefault();
     $("h2#p1").append($("input#player1").val());
     $("h2#p2").append($("input#player2").val());
  });

    $("#Roll1").click(function(){
       diceValue();
    });
   $("#Hold1").click(function(){
       hold(play1, totalScore)
       console.log(p1)
       $(".ts1").text(play1.score);
   });





















});
