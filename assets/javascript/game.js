
// Array
var letters = ['a,','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
              'q','r','s','t','u','v','w','x','y','z'];

// Basic Variables
var wins = 0;
var losses = 0;
var guesses = 10;

// Letter Generator
var compAnswer = letters[Math.floor(Math.random() * letters.length)];
    console.log(compAnswer);

// Page Content
function renderPage(){
    document.getElementById("win").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("remain").innerHTML = guesses;
}

// Game Reset
function reset(){
    guesses = 10;
}

// Game Functionality
document.onkeypress = function(event) {
    var playerGuess = event.key;

    if(playerGuess === compAnswer) {
        wins++;
        reset() 
        alert("You win!");
    }
    else {
        guesses--;
    }
    if(guesses === 0) {
        losses++;
        guesses = 10;

        alert("You lose!");
    }


    renderPage()

   

}