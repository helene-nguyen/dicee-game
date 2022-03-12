//Yumicode 2022

//& Create the dice div
function createNewDiv(className, idName) {
    //create new div
    var newDivElement = document.createElement("div");
    //add class
    newDivElement.classList.add(className);
    //add in parent element
    var getBoard = document.querySelector(idName);
    getBoard.appendChild(newDivElement);
}

//& Create ennemy
function createEnemy() {
    //create new div
    var newDivEnemy = document.createElement("div");
    //add class
    newDivEnemy.classList.add("board");
    newDivEnemy.id = "dealer";
    //add in parent element
    var getBoard = document.querySelector("#app");
    getBoard.appendChild(newDivEnemy);
}

//& Random dice
function randomDice() {
    var getDice = document.querySelectorAll(".dice");
    for (var rollCount = 0; rollCount < getDice.length; rollCount++) {
        getDice[rollCount].style.backgroundPosition = faceDice();
    }
    return getDice;
}

//& Return random number
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//& faceDice
function faceDice() {
    var getRandomNumber = randomNumber(1, 6);

    if (getRandomNumber === 2) {
        var position = "500px";
    } else if (getRandomNumber === 3) {
        var position = "400px";
    } else if (getRandomNumber === 4) {
        var position = "300px";
    } else if (getRandomNumber === 5) {
        var position = "200px";
    } else if (getRandomNumber === 6) {
        var position = "100px";
    } else {
        var position = "0";
    }

    return position;
}

//& Click on button roll dice
function randomBtnClick() {
    var btn = document.querySelector(".roll-dice");
    btn.addEventListener("click", randomDice);
}

//& Click on button add dice
function addDiceBtnClick() {
    var btn = document.querySelector(".add-dice");
    btn.addEventListener("click", function () {//to get the argument !!!!
        var askDice = "How many dice(s) would you like to add ?"
        userCreateDice(0, askDice); 
    })
}

//& Click on remove dice
function removeDiceBtnClick() {
    var btn = document.querySelector(".remove-dice");
    btn.addEventListener("click", removeDices);
}

//& Create dices
const askDice = "How many dice(s) would you like to roll ?";
function userCreateDice(diceNumber, askDice) {
    var question = parseInt(prompt(askDice), 10); // du coup me donne un nombre à récupérer
    var roundNumberDice = Math.round(question); // arrondi au cas où l'user met une virgule
    var numberOfDices = [];

    for (var i = diceNumber; i < roundNumberDice; i++) {
        numberOfDices.push(diceNumber);
        createNewDiv("dice", "#player");
        createNewDiv("dice", "#dealer");
    }
}

//& Remove dice
function removeDices() {
    //create node list for dices
    var allDicesPlayer = document.querySelectorAll("#player .dice");
    var allDicesDealer = document.querySelectorAll("#dealer .dice");
    //choose the last one
    var lastDicePlayer =  allDicesPlayer[(allDicesPlayer.length)- 1];
    var lastDiceDealer =  allDicesDealer[(allDicesDealer.length)- 1];
    //remove the last one
    lastDicePlayer.remove();
    lastDiceDealer.remove();
}


// TODO Play the game

createNewDiv("dice", "#player");
createEnemy();
createNewDiv("dice", "#dealer");
userCreateDice(1, askDice);
randomBtnClick();
addDiceBtnClick();
removeDiceBtnClick();