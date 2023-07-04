let player = {
    name: "Per",
    chips: 0
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let playName = document.getElementById("play-name")
let err = document.getElementById("err")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11 ||  1
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    document.getElementById("err").textContent = " ";
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 200
        fireConfetti();
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 50;
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips;
}


function newCard() {
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }else if (hasBlackJack === true){
        err.textContent = "you Won Start a new Game"
    }else{
        err.textContent = "Start a new Game"
    }
    console.log(newCard);
}


function getName() {
    playerEl.textContent = playName.value + ": $" + player.chips;
      document.getElementById("name-info").remove();
    
}


import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()
function fireConfetti() {
    jsConfetti.addConfetti({
        confettiRadius: 1,
        confettiColors: [
            'Bee', 'hotpink', 'gold'
        ],
        confettiNumber: 100,
        emojis: ['🎇', '✨', '🎉', '🎊'],
        emojiSize: 100,
    })
}
