//var cards = ["queen","queen","king","king"];

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
var checkForMatch = function () {
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
	//console.log("You found a match!");
	alert("You found a match!");
	console.log(cardsInPlay[0].suit);
	console.log(cardsInPlay[0].cardImage);
	console.log(cardsInPlay[1].suit);
	console.log(cardsInPlay[1].cardImage);	
	} else {
	console.log("Sorry, try again.");
	alert("Sorry, try again");
			console.log(cardsInPlay[0].suit);
	console.log(cardsInPlay[0].cardImage);
		console.log(cardsInPlay[1].suit);
	console.log(cardsInPlay[1].cardImage);
	}
}
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(2);
checkForMatch();

/*	
	if(cardsInPlay.length === 2){

		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match");
		}else{
			alert("Sorry, try again");
		}
	}
	*/






