# PIG-DICE
#### A game that allows two players to roll dice , 13th May,2018.
#### By **KINUTHIA DAVID**
## DESCRIPTION:
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

For example, the first player, Anne, begins a turn with a roll of 5. Anne could hold and score 5 points, but chooses to roll again. Anne rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Anne rolls a 1, and must end her turn without scoring. The next player, Bob, rolls the sequence 4-5-3-5-5, after which he chooses to hold, and adds his turn total of 22 points to his score
![Landing page photo](images/finalScreenshotA.png)
![Landing page photo](images/screenshotFinalB.png)

## SPECIFICATIONS:
### allows to users to play
```
var player1 = new Player("Player 1");
var player2 = new Player("Player 2");

```
### generates a random numbers
```
Turn.prototype.rollDice = function(player1, player2) {
  var anyNumber = Math.floor(Math.random() * 6) +1 ;
  this.total += anyNumber;

```
### checks if the generated random number is equal to one, and if true, runs a function to switch players
```
if (anyNumber == 1) {
  this.total = 0;
  this.nextPlayer(player1, player2);
  return anyNumber;
} else {
  this.anyNumber += anyNumber;
  return anyNumber;
};
};
```
### switches players when it's their turn
```
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
```
### rolls a dice
```
$("form#roll").submit(function(event) {
  event.preventDefault();

  var result = currentTurn.rollDice(player1, player2);

  $('#roll').text(result);
  $('#roll-total').text(currentTurn.total);
```
### switches players if a player opts to "hold"
```
$("form#end-turn").submit(function(event) {
  event.preventDefault();

  currentTurn.nextPlayer(player1, player2);

  $('#current_player').text(currentTurn.player.userName);
  $('#player1-score').text(player1.score);
  $('#player2-score').text(player2.score);

  $('#roll').text(currentTurn.anyNumber);
  $('#roll-total').text(currentTurn.total);
});
  ```
### decides and declares the winner

  ```
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

    ```
## SETUP/INSTALLATION:
  * Does not require any installation as it is a webpage and not a software-based game.Click on the following link to visit the webpage
  [PIG DICE](https://kd-kinuthiadavid.github.io/pig-dice/)

## KNOWN BUGS:
  No known bugs as of the time of publishing
## BUILT WITH:
  * HTML
  * CSS
  * Bootstrap
  * Javascript
  * jQuerry
## SUPPORT AND CONTACT DETAILS:
  Email:kd.kinuthiadavid@gmail.com

## ACKNOWLEDGEMENTS:

  * hats off for my Technical Mentors(TMs) at Moringa School for their support during my coursework
  * MORINGA SCHOOL for the facilitation of the much needed and appreciated infrastructure/facilities/environment
  * colleagues/classmates
## LICENSE:

  This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

  Copyright (c) 2018 **KINUTHIA DAVID.**
