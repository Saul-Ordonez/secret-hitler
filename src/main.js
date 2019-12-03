// import { Object } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


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
    player1 =  $("input#player1").val();
    player2 = $("input#player2").val();
    player3 = $("input#player3").val();
    player4 = $("input#player4").val();
    player5 = $("input#player5").val();
    player6 = $("input#player6").val();
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
})

$("form.presidentPolicyForm").onchange(function() {
  discardArray.push($("input[name=policyEliminator]:checked").val());

})

});
