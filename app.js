// togloomiin buh gazar ashiglagdah global hensuu
// var activePlayer; scores; roundScore; neg morond bugdiig bagtaaj hiij boloh j gsen ali huwisagch ali ni we gdgiig medku

// togloom dussan esehiig hadgalah function
var isNewGame;
// ali toglogch shoo shideh we 
var activePlayer;
// 2 toglogchiin tsugluulsan onoonuud
var scores;
// active player tsugluulj bui eeljiin onoo
var roundScore;

// shoonii zurgiig uzuuleh elementiig DOM oos haij olood end hadgalii
var diceDom = document.querySelector(".dice");
// togloomiig ehluulehed zaawal 0 bolson bugdiig duudah heregtei bn
initGame();

// togloomiig shineer ehluuleh
function initGame(){
  // togloom ehellee tolowt oruulah
  isNewGame = true;
// player turn --> 1player=0, 2player=1
  activePlayer = 0;

// player score
 scores = [0, 0];

// a variable to store the player's current turn score ROUND SCORE
 roundScore = 0;

// A variable to store the result of a dice roll, randomly generated between 1 and 6 DICE ROLL
 diceNumber = Math.floor(Math.random() * 6) + 1;

// DOM change
// <em> bol ontslog bolgoh
// window.document.querySelector('#score-0').textContent = dice;
// window.document.querySelector('#score-1').innerHTML = "<em>Yes</em>";

// programm starting
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// toglogchdiin neriig butsaaj gargah
document.getElementById('name-0').textContent = "Player 1";
document.getElementById('name-1').textContent = "Player 2";
// winner iin css iig awj hayah
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

diceDom.style.display = "none";
}

// dice of event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if(isNewGame === true){
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
  }else{
    alert("Game is over. Please start New Game");
  }
});


// Hold button event listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isNewGame){
      // toglochiin onoog tsugluulsan onoon deer nemne
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // toglogchiig hojson esehiig shalgah

    // delgets deer toog n oorchilno
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // togloch hojson esehiig medeh
    if(scores[activePlayer] >=10){
        // togloomiig duussan tolowt oruulna
        isNewGame = false;
        // ylagch gesen textiig nernii orond gargana
        document.getElementById("name-" + activePlayer).textContent = "WINNER!";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else{
        switchToNextPlayer();
    } 
    }  else {
      alert("Game is over. Please start New Game");
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
document.querySelector('.btn-new').addEventListener("click", initGame);
