//Business Logic//
var firstPlayer;
var secondPlayer;
var diceRoll;
var totalScore= 0;
    function Player (name){
      this.name= name;
      this.score = 0;
    }
    Player.prototype.addScore= function(score) {
    return this.score+=score;
    }

    function diceValue(){
      diceValue= Math.floor((Math.random()*6)+1);
      if (diceRoll== 1){
        totalScore=0;
        alert("You rolled a 1" + "." + " Pass the mouse to the next player!")
        return false ;
      }
    }else {
      totalScore+=diceRoll;
    console.log(totalScore)
    }

    return totalScore
    }
    function hold(Player,score){
      Player.addScore(score);
      totalScore=0;
      return true;
    }
 function getPlayers(new1, new2){
   firstPlayer=new Player(new1);
   secondPlayer=new Player(new2);
    }

  User.prototype.win=function(score){
    if( totalScore => 100){
      alert(this.name +" is the winner!!!");
    }
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
       console.log(firstPlayer)
       $(".ts1").text(firstPlayer.score);
   });
   $("#Roll2").click(function(){
     diceValue();
    });
    $("#Hold2").click(function(){
     hold(play2, totalScore);
     $("#ts2").text(secondPlayer.score);
     console.log(secondPlayer)
    });
});
