console.log("Up and running!");

var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];
var score = 0;


var checkForMatch = function(){
    if(cardsInPlay.length === 2){
        if(cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
            score ++;
            document.getElementById('score').textContent = "Matches Found: " + score;
        }
        else{
            alert("Sorry, try again.");
        }
    }
}

var flipCard = function(){
    var cardId = this.getAttribute('data-id');
    var card = cards[cardId].rank;
    cardsInPlay.push(card);
    console.log("User flipped " + card);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);


    checkForMatch();
};
var createBoard = function(){
    for(i = 0;i < cards.length; i ++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.className = "card";
        document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);

    }
};
var resetGame = function(){
    for(i = 0;i < 4; i ++){
        var deleteCards = document.querySelector('.card');
        document.getElementById('game-board').removeChild(deleteCards);
    }

    createBoard();
    cardsInPlay = [];
};


createBoard();

document.getElementById('reset').addEventListener('click', resetGame);



