function playerName(name){
  this.Name = name;
}




$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var playerOne = $("input#playerOneInput").val();
    var playerTwo = $("input#playerTwoInput").val();
    var newPlayer = new playerName(playerOne);
    var anotherPlayer = new playerName(playerTwo);

    $("ul#space-for-player-one-name").append("<li>" + playerOne + "</li>");
    $("ul#space-for-player-two-name").append("<li>" + playerTwo + "</li>");



    $("input#playerOneInput").val("");
    $("input#playerTwoInput").val("");
  });
});
