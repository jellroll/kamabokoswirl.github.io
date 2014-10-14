// Global arrays
images = ["img/hero-superman.png", "img/hero-batman.png", "img/hero-wonder-woman.png", "img/hero-aquaman.png", "img/hero-flash.png"];
heroes = ["superman", "batman", "wonderwoman", "aquaman", "flash"];


// Global variables
var currentImage = 0;
var userChoice = "Mystery";
var userPoints = 0;
var computerChoice = "Mystery";
var computerPoints = 0;


// Possible winning outcomes for the user (Player 1)
var userWins = ["supermanwonderwoman", "supermanaquaman", "batmansuperman", "batmanflash", "wonderwomanbatman", "wonderwomanaquaman", "aquamanflash", "aquamanbatman", "flashwonderwoman", "flashsuperman"];


// User makes a choice
function changeHero(whichNum) {
	var img = document.getElementById('player1-hero');
	img.setAttribute('src', images[whichNum]);

	currentImage = whichNum;

	var userChoice = heroes[whichNum];


	// Computer makes a random choice
	var computerChoice = Math.random();

	if(computerChoice < 0.2) {
		computerChoice = "superman";
		document.getElementById("player2-hero").src = "img/hero-superman.png";
	} else if(computerChoice <= 0.4) {
		computerChoice = "batman";
		document.getElementById("player2-hero").src = "img/hero-batman.png";
	} else if(computerChoice <= 0.6) {
		computerChoice = "wonderwoman";
		document.getElementById("player2-hero").src = "img/hero-wonder-woman.png";
	} else if(computerChoice <= 0.8) {
		computerChoice = "aquaman";
		document.getElementById("player2-hero").src = "img/hero-aquaman.png";
	} else {
		computerChoice = "flash";
		document.getElementById("player2-hero").src = "img/hero-flash.png";
	}


	// Compare the two choices to determine a winner
	var message = "Roboto wins!";

	if(userChoice == computerChoice) {
		message = "It's a tie!";
	} else {

		var outcome = userChoice + computerChoice;
		var message = "Roboto wins!"
		computerPoints = computerPoints + 1;
		document.getElementById("player2-score").innerHTML = computerPoints;

		$.each(userWins, function(index, value) {
			if(outcome == value) {
				message = "You win!"
				userPoints = userPoints + 1;
				document.getElementById("player1-score").innerHTML = userPoints;
		}
	});
		}

	document.getElementById("winner").innerHTML = (message);
	return message;
}

// Reset the game
function reset() {

	currentImage = 0;
	userChoice = "Mystery";
	userPoints = 0;
	computerChoice = "Mystery";
	computerPoints = 0;

	document.getElementById("player1-score").innerHTML = 0;
	document.getElementById("player2-score").innerHTML = 0;

	document.getElementById("player1-hero").src = "img/hero-mystery.png";
	document.getElementById("player2-hero").src = "img/hero-mystery.png";

	document.getElementById("winner").innerHTML = "&#8668; choose your hero";
}