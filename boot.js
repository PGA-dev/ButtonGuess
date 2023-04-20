let max = 100;
let min = 1;
let nGuesses = 0;
let currGuess = 0;

/* getElementById would be fine to use below as well instead of querySelector */
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const higherBtn = document.querySelector("#higherBtn");
const lowerBtn = document.querySelector("#lowerBtn");
const startBtn = document.querySelector("#startBtn");
const guessBtn = document.querySelector("#guessBtn");
const message = document.querySelector("#instructions");
const resetBtn = document.querySelector("#resetBtn");

startBtn.addEventListener("click", tryGuess);
yesBtn.addEventListener("click", rightGuess);
noBtn.addEventListener("click", wrongGuess);
higherBtn.addEventListener("click", numIsHigher);
resetBtn.addEventListener("click", resetGame);
lowerBtn.addEventListener("click", numIsLower);


toggleBtns([startBtn], true);

function tryGuess(){ 
    if (!nGuesses) { // first time guessing
        toggleBtns([startBtn], false);
        toggleBtns([guessBtn], true);
    }
    nGuesses++;
 
    currGuess = Math.floor((max - min)/2) + min;
    console.log(`Guessing between ${min} and ${max} - guessing ${currGuess} - this is guess number ${nGuesses}`);
    guessBtn.textContent = currGuess + "!";
    message.textContent = "Am I correct?";
    toggleBtns([yesBtn, noBtn], true);
}

function toggleBtns(btnsArray, on) { 
    for (const btn of btnsArray) {
        if (on) {
            btn.style.display = "inline-block"; 
        } else {
            btn.style.display = "none";
        }
    }
}


function rightGuess() {
    toggleBtns([yesBtn, noBtn], false);
    toggleBtns([resetBtn], true);
    message.textContent = `I guessed your number in ${nGuesses} tries!`;
}

function wrongGuess() {
    toggleBtns([yesBtn, noBtn], false);
    toggleBtns([higherBtn, lowerBtn], true);
    message.textContent = `Is your number higher or lower than ${currGuess}?`;   
} 
  
function numIsHigher() {
    min = currGuess + 1;
    console.log("Changing the minimum to: " + min);
    toggleBtns([higherBtn, lowerBtn], false);
    if (currGuess === 100){

        sillyGuess();
    }
    else{
        tryGuess();
}
}

function numIsLower() {
    max = currGuess - 1;
    console.log("Changing the maximum to: " + max);
    toggleBtns([higherBtn, lowerBtn], false);
    if (currGuess === 0){
        sillyGuess();
    }else{
        tryGuess();
}
}

function resetGame(){  
    nGuesses = 0;
    currGuess = 0;
    min = 1;
    max = 100;
    toggleBtns([startBtn], true);
    toggleBtns([guessBtn], false);
    toggleBtns([resetBtn], false);
    message.textContent = `Think of a number between 1-100 and click the blue button when you're ready.`; 
}

function sillyGuess() {
    nGuesses = 0;
    min = 1;
    max = 100;
    currGuess = 0;
    toggleBtns([guessBtn], false);
    message.textContent = `You are either cheating or are silly!`;
    toggleBtns([resetBtn], true);
} 

//$jQuerry for challenge text bye bye, a dream of every NuCamper
$(function () {
    $("#hideIn").on("click", function () {
        $("#hideIn").hide();
      });
      $("#showIn").on("click", function () {
        $("#hideIn").show();
      });
      $("#hideIn2").on("click", function () {
        $("#hideIn2").hide();
      });
      $("#showIn").on("click", function () {
        $("#hideIn2").show();
      });
      $("#hideIn3").on("click", function () {
        $("#hideIn3").hide();
      });
      $("#showIn").on("click", function () {
        $("#hideIn3").show();
      });
      $("#hideIn4").on("click", function () {
        $("#hideIn4").hide();
      });
      $("#showIn").on("click", function () {
        $("#hideIn4").show();
      });
        $("#hideH").on("click", function () {
        $("#hideH").hide();
      });
      $("#showIn").on("click", function () {
        $("#hideH").show();
      });
        $("#hideIn5").on("click", function () {
        $("#hideIn5").hide();
      });
      $("#showIn").on("click", function () {
        $("#hideIn5").show();
      });
        $("#hideH2").on("click", function () {
        $("#hideH2").hide();
      });
      $("#showIn").on("click", function () {
        $("#hideH2").show();
      });
});