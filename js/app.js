//& Create the dice
function createNewDiv(className, idName) {
    //create new div
    var newDivElement = document.createElement("div");
    //add class
    newDivElement.classList.add(className);
    //add in parent element
    var getBoard = document.querySelector(idName);
    getBoard.appendChild(newDivElement);
}

//& Return random number
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//& Random dice
function randomDice() {
    var getDice = document.querySelectorAll(".dice");

    for (var n = 0; n < getDice.length; n++) {
        getDice[n].style.backgroundPosition = faceDice();
    }

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

//& Click on button
function btnClick() {
    var btn = document.querySelector("button");
    btn.addEventListener("click", randomDice);
}

//& Many dices
function userCreateDice() {
    var question = parseInt(prompt("How many dice(s) would you like to roll ?")); // du coup me donne un nombre à récupérer
    var roundNumberDice = Math.round(question); // arrondi au cas où l'user met une virgule
    var numberOfDices = [];

    if (roundNumberDice > 10) {
        question = parseInt(prompt("Please, not so much !"));
    } else {
        for (var i = 1; i < roundNumberDice; i++) {
            numberOfDices.push(i);
            createNewDiv("dice","#player");
            createNewDiv("dice", "#dealer");
        }

    }
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


createNewDiv("dice","#player");
btnClick();
createEnemy();
createNewDiv("dice", "#dealer");
userCreateDice();