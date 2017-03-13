var cards = [ "queen", "queen", "king", "king" ];
var cardsInPlay = [ ];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardsInPlay.length === 2 && cardOne !== cardTwo) {
	alert("Sorry, try again!");
}