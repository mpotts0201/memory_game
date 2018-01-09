console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
    if(cardsInPlay.length === 2){
        if(cardsInPlay[0] === cardsInPlay[1]){
            alert("You found a match!");
        }
        else{
            alert("Sorry, try again.");
        }
    }
}

var flipCard = function(cardId){
    var card = cards[cardId];
    cardsInPlay.push(card);
    console.log("User flipped " + card);

    checkForMatch();
}

flipCard(0);
flipCard(2);



