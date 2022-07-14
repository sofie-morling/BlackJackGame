let player = {
    Name: "Sofie",
    Chips: 123
};
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.getElementById("sumEl");
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-El");

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.Name + ": $" + player.Chips;

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if(random === 1) {
        return 11;
    }
    else if(random > 10) {
        return 10;
    } else {
    return random;
    }
}

function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {

cardsEl.textContent= "Cards: ";

// for loop
for(let i=0;i<cards.length;i++) {
    cardsEl.textContent += cards[i] + " ";
}

sumEl.textContent = "Sum: " + sum;

if(sum <= 20) {
    message = "Do you want to draw a new card?";
}
else if(sum === 21) {
    message ="yay, you have BlackJack!";
    hasBlackJack = true;
} else {
    message ="Game Over!";
    isAlive = false;
    }
   messageEl.textContent = message; 
}    



function newCard() {

    if(isAlive === true && hasBlackJack === false) {
        let Card = getRandomCard();

        sum += Card;
        cards.push(Card);
        renderGame();
    }
   
}