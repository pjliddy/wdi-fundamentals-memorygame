var cards = [ "queen", "queen", "king", "king" ];
var cardsInPlay = [ ];

var checkForMatch = function() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again!");
	}

	return;
}

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);

	checkForMatch();
	return;
}


flipCard(0);
flipCard(2);
