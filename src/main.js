import { Game, Players } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const game = new Game();
const players = new Players();
const discardArray = [];


$(document).ready(function() {
  let player1;
  let player2;
  let player3;
  let player4;
  let player5;
  let player6;

  $("button#5players").click(function() {
    $(".playerNum").hide();
    $(".nameInput5").show();
  })

  $("button#6players").click(function() {
    $(".playerNum").hide();
    $(".nameInput6").show();
  })

  $("form.form5").submit(function(event) {
    event.preventDefault();
    player1 =  $("input#player1").val();
    player2 = $("input#player2").val();
    player3 = $("input#player3").val();
    player4 = $("input#player4").val();
    player5 = $("input#player5").val();
    game.playerOrder.push(player1, player2, player3, player4, player5);
    console.log(game.playerOrder);
    $("#player1Name").text(player1);
    $("#player2Name").text(player2);
    $("#player3Name").text(player3);
    $("#player4Name").text(player4);
    $("#player5Name").text(player5);
    $(".player1").show();
    $(".player2").show();
    $(".player3").show();
    $(".player4").show();
    $(".player5").show();
    $(".affiliationCheck").show();
    $(".nameInput5").hide();
  });

  $("form.form6").submit(function(event) {
    event.preventDefault();
    player1 =  $("input#player1b").val();
    player2 = $("input#player2b").val();
    player3 = $("input#player3b").val();
    player4 = $("input#player4b").val();
    player5 = $("input#player5b").val();
    player6 = $("input#player6b").val();
    game.playerOrder.push(player1, player2, player3, player4, player5, player6);
    console.log(game.playerOrder);
    $("#player1Name").text(player1);
    $("#player2Name").text(player2);
    $("#player3Name").text(player3);
    $("#player4Name").text(player4);
    $("#player5Name").text(player5);
    $("#player6Name").text(player6);
    $(".player1").show();
    $(".player2").show();
    $(".player3").show();
    $(".player4").show();
    $(".player5").show();
    $(".player6").show();
    $(".affiliationCheck").show();
    $(".nameInput6").hide();
  });

  //affiliation button needs object information from backend//
  $("#player1Btn").click(function(event) {
    event.preventDefault();
    $('#player1Affiliation').toggle(this.party, this.secret);
  });

  $("#player2Btn").click(function(event) {
    event.preventDefault();
    $('#player2Affiliation').toggle(this.party, this.secret);
  });

  $("#player3Btn").click(function(event) {
    event.preventDefault();
    $('#player3Affiliation').toggle(this.party, this.secret);
  });

  $("#player4Btn").click(function(event) {
    event.preventDefault();
    $('#player4Affiliation').toggle(this.party, this.secret);
  });

  $("#player5Btn").click(function(event) {
    event.preventDefault();
    $('#player5Affiliation').toggle(this.party, this.secret);
  });

  $("#player6Btn").click(function(event) {
    event.preventDefault();
    $('#player6Affiliation').toggle(this.party, this.secret);
  });

$("button#audioPlay").click(function() {
  $(".affiliationCheck").hide();
  //AUDIO WOULD BE PROMPTED HERE!!!!!!!////
})

$("button#audioDone").click(function() {
  $(".selectChancellor").show();

  $(".nameButton").prop("disabled", false);
  // $(".nameButton").removeAttr("disabled"); << MAYBE WILL NEED//

})

$("button.nameButton").click(function() {
  $(".nameButton").prop("disabled", true);
  $(".selectChancellor").hide();
  $(".presidentPolicyCheck").show();
})

$("button#presidentVerifyButton").click(function() {
  $(".presidentPolicyCheck").hide();
  $(".presidentPolicyElimination").show();
    game.drawThreeCards();
  $("#presidentPolicy1").text(game.drawnCardsArray[0]);
  $("#presidentPolicy2").text(game.drawnCardsArray[1]);
  $("#presidentPolicy3").text(game.drawnCardsArray[2]);
})


$("form.presidentPolicyForm input").click(function() {
  $(this).hide();
  console.log($(this));
  let badCard = $("#" + $(this).next()[0].id);
  discardArray.push(badCard.text());
  console.log(discardArray);
  console.log(badCard);
  //This was with Travis' help, to get the info for the selected radio to be removed STILL NEED TO FIGURE OUT REMOVAL AND CHANCELLOR ROUND.//
  if (badCard.index() === 1) {
    game.drawnCardsArray.splice(0, 1);
  } else if (badCard.index() === 3) {
    game.drawnCardsArray.splice(1, 1);
  } else {
    game.drawnCardsArray.splice(2, 1);
  }
  console.log(discardArray);
  $(".presidentPolicyElimination").hide();
  $(".chancellorPolicyCheck").show();

})

$("#chancellorVerifyButton").click(function() {
  $("#chancellorPolicy1").text(game.drawnCardsArray[0]);
  $("#chancellorPolicy2").text(game.drawnCardsArray[1]);
  $(".chancellorPolicyCheck").hide();
  $(".chancellorPolicyElimination").show();
})

$("form.chancellorPolicyForm input").click(function() {
  $(this).hide();
  let badCard = $("#" + $(this).next()[0].id);
  discardArray.push(badCard.text());
  if (badCard.index() === 1) {
    game.drawnCardsArray.splice(0, 1);
  } else {
    game.drawnCardsArray.splice(1, 1);
  }
  $(".chancellorPolicyElimination").hide();
  //THIS IS WHERE WE SHOW THE CARD ON THE BOARD///
})




});
