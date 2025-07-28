// player turn --> 1player=0, 2player=1 
var activePlayer = 1;

// player score
var scores = [0,0];


// a variable to store the player's current turn score ROUND SCORE
var roundScore = 0;

// A variable to store the result of a dice roll, randomly generated between 1 and 6 DICE ROLL
var dice = Math.floor(Math.random() *6)+1;


// DOM change
// <em> bol ontslog bolgoh
// window.document.querySelector('#score-0').textContent = dice;
// window.document.querySelector('#score-1').innerHTML = "<em>Yes</em>";


// programm starting 
document.querySelector('.dice').style.display = "none";
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

console.log("dice : " +dice);