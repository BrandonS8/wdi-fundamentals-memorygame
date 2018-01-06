console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];

var score = 0;

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
   	alert("You found a match!");
   	document.getElementById('reset').style.display = 'inline';
   	score += 1;
   	document.getElementById('score').textContent = 'Score: ' + score;
   } else {
   	alert('Sorry try again');
   	document.getElementById('reset').style.display = 'inline';
   }
};

var flipCard = function() {
var cardId = this.getAttribute('data-id')
// console.log("User flipped " + cards[cardId].rank);
// console.log(cards[cardId].cardImage);
// console.log(cards[cardId].suit);
this.setAttribute('src', cards[cardId].cardImage)
cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2){
	setTimeout(checkForMatch, 50);
};
};


var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var reset = function() {
	cardId = null;
	document.getElementById('game-board').innerHTML = "";
	createBoard();
	cardsInPlay = [];
}


document.getElementById('reset').addEventListener('click', reset);

createBoard();
