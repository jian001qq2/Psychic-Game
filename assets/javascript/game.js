 // Creates an array that lists out all of the options 
 var answerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
     "s", "t", "u", "v", "w", "x", "y", "z"]

 // Creating variables to hold the number of wins, losses, and guesses left and typed letters . (initial state of the game)
 var wins = 0;
 var losses = 0;
 var guessLeft = 10;
 var guessedLetters = [];

 // Creating an variable refer to the computer's choice from the array defined at top
 var result = answerChoices[Math.floor(Math.random() * answerChoices.length)];

 // Create variables that hold references to the places in the HTML where we want to display things.
 var winsText = document.getElementById("Wins-text");
 var lossesText = document.getElementById("Losses-text");
 var guessLeftText = document.getElementById("Guess-left-text");
 var guessedLettersText = document.getElementById("Guessed-text");


 // Creating initial text at the start of the game
 winsText.textContent = "Wins: " + wins;
 lossesText.textContent = "Losses: " + losses;
 guessLeftText.textContent = "Guesses Left: " + guessLeft;
 guessedLettersText.textContent = "Your Guesses so far: ";

 //function expression for reset the game. it resets the guess letter and guess chances, and clear the gueesed letters
 var resetGame = function () {
     result = answerChoices[Math.floor(Math.random() * answerChoices.length)];
     guessLeft = 10;
     guessedLetters = [];
     guessLeftText.textContent = "Guesses Left: " + guessLeft;
     guessedLettersText.textContent = "Your Guesses so far: " + guessedLetters;
 }

 document.onkeyup = function (event) {
     //determine the key and make it as lower case letter.
     var userGuess = event.key.toLowerCase();

     // function expression for check user input that has not repeat and take 1 guess chance down
     var hasBeenUsed = function (input) {
         if (guessedLetters.indexOf(input) === -1) {
             guessLeft--;
             guessLeftText.textContent = "Guesses Left: " + guessLeft;
             guessedLetters.push(userGuess);
             guessedLettersText.textContent = "Your Guesses so far: " + guessedLetters +" ";
         } else {
             alert("Try a new letter")
         }
     }
     // Logic for the game to work
     // condition when user got the right 
     if ((userGuess === result) && (guessLeft > 0)) {
         wins++;
         winsText.textContent = "Wins: " + wins;
         resetGame();
     } 
     // run this if condition when user typed wrong 
     else if ((userGuess !== result) && (guessLeft > 1)) {
         hasBeenUsed(userGuess);


     } 
     //reset the game 
     else if (guessLeft == 1) {
         losses++;
         lossesText.textContent = "Losses: " + losses;
         resetGame();
     }
     /*this logic is tricky for the if conditions to work, consider when the guess chance left is 2, then if user presses wrong again
     , the second if statement will execute, and the guess left is 1 in the screen. then for the last chance , if the user pressed the 
     right letter , the first condition is work. if pressed wrong again, since we want the screen a immedate reset after the wrong, so 
     make the last if statemnt to work. but it needs other two conditions above to be false first.*/
     
     /*Check lines , this will show theuser's choice and computer choice in the console window
           console.log("This is the user input " + userGuess);
           console.log("this is computer answer " + result);*/
 
 }