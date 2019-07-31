/* notes
DOM is Document object model 
this code will be heavily modded for coding challange 3
*/

/*
*/

var scores, roundScores, activePlayer, gamePlaying, prevRoll, winningScore, input;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
   
    if(gamePlaying){

    document.querySelector('.goal').style.display = 'block';
    //show a statement saying winning score is xxx (will be winning score.)
    document.querySelector('.goal').innerHTML= '<p>Winning score is </p>' + winningScore;
    // hides set score table
    document.querySelector('.setScore').style.display = 'none';
    //generating random number between 1-6 and displaying to screen.
    var dice1 = Math.floor(Math.random()*6)+ 1;
    var diceDOM1 = document.querySelector('#dice1');diceDOM1.style.display = 'block';
    diceDOM1.src = 'dice-'+ dice1 + '.png';

    var dice2 = Math.floor(Math.random()*6)+ 1;
    var diceDOM2 = document.querySelector('#dice2');diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-'+ dice2 + '.png';

    //dice result
    var sumOfDice = dice1 + dice2;

    //want player to loose score if two 6s are rolled;
    if(dice1 === 6 && dice2 === 6){
        //notification to player loosing score
        //alert('two 6s have been rolled for player ' + activePlayer);
        //player looses entire score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        nextPlayer();
    } else if (dice1 !== 1 && dice2 !==1){
        //add score to 
        roundScores += sumOfDice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
        //alert('Rolled a 1. next players turn');
        nextPlayer();
         
        //updating status bar
        document.querySelector('.gamestatus').innerHTML= '<p>Playing Brah!! </p>';      
        }
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
        if(scores[activePlayer] >=winningScore){
            document.getElementById('name-'+ activePlayer).textContent = activePlayer + ' is the winner';
            document.querySelector('#dice1').style.display = 'none';
            document.querySelector('#dice2').style.display = 'none';
            //this refers to a class in css to change dom
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            //updating status bar
            document.querySelector('.gamestatus').innerHTML= '<p>Player </p>' + activePlayer + '<p> Wins!! </p>';
        } else {
            nextPlayer();
        }
    }
});

//click listener to reset game using self involded function
document.querySelector('.btn-new').addEventListener('click', init);

//adding another click listener to set score if input is detected
document.querySelector('#btn-input').addEventListener('click', function(){

    //updating status bar
    document.querySelector('.gamestatus').innerHTML= '<p>Playing Brah!! </p>';

     input = document.getElementById("userInput").value;
 
    if(input){
        winningScore = input;
        console.log('input is true ' + winningScore);
        
       // console.log('winnng score is ' + winningScore);
    } else {
        
        console.log('no input; winning score is ' +winningScore);
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


    //creating init funciton which is run when page is reladed
    function init() {

    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    gamePlaying = true;
    //set to 10 for testign
    winningScore = 10;

    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';

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

    // shows set score table
    document.querySelector('.setScore').style.display = 'block';

    // hides score display
    document.querySelector('.goal').style.display= 'none';
    
    //sets status bar to 'not playing'
    document.querySelector('.gamestatus').innerHTML= '<p>Not playing </p>';
}
















































