// Each game item and its attributes
var item0 = {
	"stem" : "I don't want to loose my spare change.",
	"answer" : false,
	"fix" : true
}

var item1 = {
	"stem" : "It's getting hot in here",
	"answer" : true,
	"fix" : true
}

var item2 = {
	"stem" : "I'll definately give you a call on Monday afternoon.",
	"answer" : false,
	"fix" : true
}

var item3 = {
	"stem" : "Sam ordered a sandwich, chips and soda.",
	"answer" : false,
	"fix" : true
}

// Global variables
var items = [item0, item1, item2, item3];
var item = document.getElementById('item');
var currentItem = 0;


// When the game is loaded, display the items
function setItem() {
	item.innerHTML = items[currentItem.stem];
	//console.log(currentItem);

}





// Evaluate response
function evaluateResponse() {
	//console.log(currentItem.answer);

}


// Display fix response
function displayFix() {

}


// Display feedback to the fix response
function displayFeedback() {

}


// Tally score
function tallyScore() {

}


// Display results
function displayResults() {

}


// Reset game
function reset() {

}