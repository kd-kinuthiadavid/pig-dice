//BUSINESS LOGIC


//constructor for player
function Player(userName) {
  this.userName = userName;
  this.score = 0;
};

//constructor for player's turn
function Turn(player) {
  this.total = 0;
  this.anyNumber = 0;
  this.player = player;
};

//prototype for rolling dice
Turn.prototype.rollDice = function(player1, player2) {
  var anyNumber = Math.floor(Math.random() * 6) +1 ;
  this.total += anyNumber;

  if (anyNumber == 1) {
    this.total = 0;
    this.nextPlayer(player1, player2);
    return anyNumber;
  } else {
    this.anyNumber += anyNumber;
    return anyNumber;
  };
};

//prototype for switching players
Turn.prototype.nextPlayer = function(player1, player2) {
  this.player.score += this.total;
    this.total = 0;
  this.anyNumber = 0;

    if (this.player == player1) {
    this.player = player2;
    $("#player2").toggleClass("active");
    $("#player1").toggleClass("active");
  } else if (this.player == player2) {
    this.player = player1;
    $("#player2").toggleClass("active");
    $("#player1").toggleClass("active");
  };
};




// USER INTERFACE LOGIC
$(document).ready(function() {

  var player1 = new Player("Player 1");
  var player2 = new Player("Player 2");
  var currentTurn = new Turn(player1);
  var total = currentTurn.total;

  $("#roll-total").text(total);
  $('#player1-score').text(player1.score);
  $('#player2-score').text(player2.score);
  $('#current_player').text(currentTurn.player.userName);


  //roll button
  $("form#roll").submit(function(event) {
    event.preventDefault();

    var result = currentTurn.rollDice(player1, player2);

    $('#roll').text(result);
    $('#roll-total').text(currentTurn.total);

    //hold button
    $("form#hold-turn").submit(function(event) {
      event.preventDefault();

      currentTurn.nextPlayer(player1, player2);

      $('#current_player').text(currentTurn.player.userName);
      $('#player1-score').text(player1.score);
      $('#player2-score').text(player2.score);

      $('#roll').text(currentTurn.anyNumber);
      $('#roll-total').text(currentTurn.total);
    });

    //who is the winner
    if ((currentTurn.total + currentTurn.player.score) >= 100) {
      if (currentTurn.player == player1) {
        $('#player1-score').text(currentTurn.total + currentTurn.player.score);
        alert("You are the winner!");
      } else if (currentTurn.player == player2) {
        $('#player2-score').text(currentTurn.total + currentTurn.player.score)
        alert("You are the winner!");
      };
    };
  });


});
