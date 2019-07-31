/* notes
DOM is Document object model 
*/

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying, prevRoll;

//state variable tells us condition of system

/*
scores = [0,0];
roundScores = 0;
activePlayer = 0;
*/
//we don't need this code anymore as it in init funciton
init();

//selects stuff in css 
// # css to select ids
// active player works because of type coercison
//we can't use code below to modify HTML via js
//document.querySelector('#current-' + activePlayer).textContent = dice;
// is a getter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//to read html element
// is a setter
// var x = document.querySelector('#score-0').textContent;
//console.log(x);




//events are notifications that let code know something happened on webpage. Thye can only happen when there is nothing onthe execution stack. Message queue

/*
function btn() {
    //so something
}
btn();

//event listeners two parameaters, type of event an function. in this example, btn is a call back function which is called by the event listener (another function). they don't have () as we don't want to call the funciton right here
document.querySelector('.btn-roll').addEventListener('click', btn);
*/

//If we don't want a callback, we can create an annoymyus function which is called inline. They don't have names and can't be reused

document.querySelector('.btn-roll').addEventListener('click', function() {
   
    // for debugging => console.log(gamePlaying);
    //this is adding our state 
    if(gamePlaying){
            // what happens when buttons roll
    // 1. random number
    // keep in scope
    //changed to 3 for debugging
    //set prevRoll to nothing
    prevRoll = 0;
    
    var dice = Math.floor(Math.random()*6)+ 1;
    prevRoll += dice;
    console.log('prev roll' + prevRoll)
    console.log('currnt dice' + dice);
    


    //2 display result
    var diceDOM = document.querySelector('.dice');diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png';
    }

    //3 update round score if rolled num was NOT a 1
    // dice not equal to one
    if (dice !== 1){
        //add score to 
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
        //Next player. We need to toggle between the active players of 0 or 1 depending on the active player. We could use if / else statement but will instead use tenery oprater
        //(if active player is 0, then active player becomes one else active player 0 )
        /* it is the same as
        if (activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
             }
        }
        */
       //the function has been defined elsewhere
        nextPlayer();
         } 
    }
    // there does not need to be else statement as nothing will happn if gamestate is not true

);

//set up event listern for other button

document.querySelector('.btn-hold').addEventListener('click', function(){
    //we only hold points if game is activ
    if (gamePlaying){
        //add currnt socre to player global score
        scores[activePlayer] += roundScores;
        //update ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //did playe win game
        if(scores[activePlayer] >=100){
            //alternative solution
            //document.queryselector('#name-' + activePlayer).textContent = 'winner!'
            document.getElementById('name-'+ activePlayer).textContent = activePlayer + ' is the winner';
            console.log('the winner is ' + activePlayer);
            document.querySelector('.dice').style.display = 'none';
            //this refers to a class in css to change dom
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            nextPlayer();
        }
        //next players turn
    }
});


//we don't want to repeat ourselves ever

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;

    // we need ot set current score back ot 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //we don't remove classes/ we toggle
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //we want to hide the 1 when it swaps
    document.querySelector('.dice').style.display = 'none'; 
}

//add another click listener to ui
//this will reset the game completely
/* why initiaiate anonymus function only to call aonther function when eventlistener method can call it?

document.querySelector('.btn-new').addEventListener(click, function(){
    //we can write reset manually or put this in to a funciton //dry 
    init();
});
*/
document.querySelector('.btn-new').addEventListener('click', init);

//creating init funciton which is run when page is reladed
function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    gamePlaying = true;
    

    document.querySelector('.dice').style.display = 'none';

    //used for selecting ids and setting dynamically
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //we also need to reset active player names
    document.getElementById('name-0').textContent = 'Jordan';
    document.getElementById('name-1').textContent = 'Sam';
    //remove the winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //remove active classes tehn add class to first one
    document.querySelector('.player-0-panel').classList.add('active');
}
















