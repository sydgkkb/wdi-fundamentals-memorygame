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
	//cardElement.setAttribute('src',"images/back.png");
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
	//console.log("You found a match!");
	alert("You found a match!");
	/*
	alert(cardsInPlay[0].suit);
	alert(cardsInPlay[0].cardImage);
	alert(cardsInPlay[1].suit);
	alert(cardsInPlay[1].cardImage);	*/
	} else {
	//console.log("Sorry, try again.");
	alert("Sorry, try again");
	/*		console.log(cardsInPlay[0].suit);
	console.log(cardsInPlay[0].cardImage);
		console.log(cardsInPlay[1].suit);
	console.log(cardsInPlay[1].cardImage);*/
	}
}else{
	alert("Count is not 2");
}
}

/*
flipCard(0);
flipCard(2);
*/
//checkForMatch();

/*	
	if(cardsInPlay.length === 2){

		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match");
		}else{
			alert("Sorry, try again");
		}
	}
	*/

	var flipCard = function() {
		var cardId = this.getAttribute('data-id');
		//this.setAttribute('src',cardId.cardImage);
		//alert(this.getAttribute('cardImage'));
		//alert(this.getAttribute('src'));
		this.setAttribute('src',cards[cardId].cardImage);
		cardsInPlay.push(cards[cardId]);
		//alert(cardsInPlay.length);
		if(cardsInPlay.length === 2) {
			checkForMatch();
		}

	}

	var createBoard = function(){
	var gameBoard = document.getElementById('game-board');
		for (var i = 0; i < cards.length; i++) {			
    		var cardElement = document.createElement('img');
    		cardElement.setAttribute('src',"images/back.png");
    		cardElement.setAttribute('data-id',i);
    		cardElement.addEventListener('click',flipCard);
    		gameBoard.appendChild(cardElement);
    		//cardElement.addEventListener('click',flipcard);
    		//document.getElementById('game-board').appendChild(cardElement); 
		}
	}

	//document.getElementsByTagName('button')[0].addEventListener('click', addItem); 
	//cardElement.addEventListener('click',flipcard);

	createBoard();
	//checkForMatch();







