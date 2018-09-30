//Business Logic//
var p1Name= document.getElementById("player1");
var p2Name= document.getElementById("player2");






















//User Interface//
$(document).ready (function () {
  $ ("form#names").submit(function(event) {
    event.preventDefault();
     $("h2#p1").append($("input#player1").val());
     $("h2#p2").append($("input#player2").val());
  });




















});
