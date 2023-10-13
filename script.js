// so we can use HTML element later via a variable
var button = document.getElementById("button");
var textInput = document.getElementById("text-input");
var prompt = document.getElementById("prompt");
var randomNum = Math.floor((Math.random() * 25) + 1); // so we can compare random number to guess
var guess = 0;                                        // to store user's guess later

// to store user's guess and compare to random number later and clear text input
function buttonClicked(){
    guess = textInput.value;
    textInput.value = "";
}

// to tell the user the result of guess
function checkValue(){
    if (guess < randomNum){
        prompt.innerText = "Your guess is wrong. Too low!";
        prompt.style.color = "red";
    }

    else if (guess > randomNum){
        prompt.innerText = "Your guess is wrong. Too high!";
        prompt.style.color = "red";
    }

    else{
        prompt.innerText = "Correct! You guessed the right number.";
        prompt.style.color = "green";
    }
}

// to execute an event after an action
button.addEventListener("click", buttonClicked);
button.addEventListener("click", checkValue);