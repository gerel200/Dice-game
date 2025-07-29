// player turn --> 1player=0, 2player=1
var activePlayer = 0;

// player score
var scores = [0, 0];

// a variable to store the player's current turn score ROUND SCORE
var roundScore = 0;

// A variable to store the result of a dice roll, randomly generated between 1 and 6 DICE ROLL
var diceNumber = Math.floor(Math.random() * 6) + 1;

// DOM change
// <em> bol ontslog bolgoh
// window.document.querySelector('#score-0').textContent = dice;
// window.document.querySelector('#score-1').innerHTML = "<em>Yes</em>";

// programm starting
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// dice of event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 random number
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // dice img
  diceDom.style.display = "block";

  // random number = dice number
  diceDom.src = "dice-" + diceNumber + ".png";

  // rolled number is not 1, add it to the active player's current score.
  if (diceNumber !== 1) {
    // 1 bish bol buusan toog toglogchid nemne
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
  }
});


// Hold button event listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    // toglochiin onoog tsugluulsan onoon deer nemne
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // toglogchiig hojson esehiig shalgah

    // delgets deer toog n oorchilno
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >=10){
        // ylagch gesen textiig nernii orond gargana
        document.getElementById("name-" + activePlayer).textContent = "WINNER!";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else{
        switchToNextPlayer();
    } 
    });

function switchToNextPlayer(){
    // eeljiin onoog 0 bolgono
    roundScore = 0; //tsugluulsan onoog 0 bolgoj bgaa
    document.getElementById('current-' + activePlayer).textContent = "0";

    // toglogchiin eeljiig solino
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // ulaan tseg shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // shoog tur alga bolgono
    diceDom.style.display = "none";
}

// new game button event listener
document.querySelector('btn-new').addEventListener