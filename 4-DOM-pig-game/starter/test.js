/* notes
DOM is Document object model 
*/



var scores, roundScores, activePlayer, gamePlaying, prevRoll;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
   
    if(gamePlaying){

    var dice = Math.floor(Math.random()*2)+ 1;
    console.log('dice rolled is ' + dice);
    console.log('lastDice value was' + lastDice);

    var diceDOM = document.querySelector('.dice');diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png';

    //want player to loose score if two 6s are rolled;
    if(dice === 2 && lastDice === 2){
        //player looses entire score
        console.log('lost entire socre');
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        nextPlayer();
    } else if (dice !== 1){
        //add score to 
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
        nextPlayer();
         }
        //we save variable here which is then saved to external variable. When function returns, we can still use this value
        lastDice = dice; 
        }
    });

//set up event listern for hold button

document.querySelector('.btn-hold').addEventListener('click', function(){
    //we only hold points if game is activ
    if (gamePlaying){
        //add currnt socre to player global score
        scores[activePlayer] += roundScores;
        //update ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //did playe win game
        if(scores[activePlayer] >=100){
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
















































