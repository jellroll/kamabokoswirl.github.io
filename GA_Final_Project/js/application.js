//Global variables
var items = [item0, item1, item2, item3, item4];
var currentItem = items[0];
var nextItem = 0;
var score = 0;
var issues = [];

var feedbackCorrect = "<span aria-hidden=\"true\" data-icon=\"&#e603;\" class=\"icon-checkmark-circle\" title=\"Correct\"></span>";
var feedbackIncorrect = "<span aria-hidden=\"true\" data-icon=\"&#e602;\" class=\"icon-cancel-circle\" title=\"Incorrect\"></span>";

var resultRange1 = "<span aria-hidden=\"true\" data-icon=\"&#e601;\" class=\"icon-confused\" alt=\"Level 1\"></span>";
var resultRange2 = "<span aria-hidden=\"true\" data-icon=\"&#e607;\" class=\"icon-neutral\" alt=\"Level 2\"></span>";
var resultRange3 = "<span aria-hidden=\"true\" data-icon=\"&#e60a;\" class=\"icon-smiley\" alt=\"Level 3\"></span>";
var resultRange4 = "<span aria-hidden=\"true\" data-icon=\"&#e609;\" class=\"icon-happy\" alt=\"Level 4\"></span>";


// Trigger game methods
$(document).ready(function() {
	$("#start-game").click(function() {
		startGame();
	});

	$("#evaluate-response-false").click(function() {
		evaluateResponse(false);
	});

	$("#evaluate-response-true").click(function() {
		evaluateResponse(true);
	});

	$("#evaluate-fix-response").click(function() {
		evaluateFixResponse();
	});

	$("#display-next-item").click(function() {
		displayNextItem();
	});

	$("#reset-game").click(function() {
		resetGame();
	});
});


// Start the game
function startGame() {
	$("#intro").hide();
	$("#card-item").show();
	displayItem();
}


// Display the item content
function displayItem() {
	$("#item").html(currentItem.stem);
}


// Display the next item
function displayNextItem() {	
	nextItem++;
	currentItem = items[nextItem];
	
	// Clear the form input field
	$("#fix-response-text").trigger("reset");

	$("#card-feedback").hide();
	$("#card-item").show();

	if(nextItem === items.length) {
		currentItem = items[0];

		$("#card-item").hide();
		$("#results").show();
		displayResults();

		} else {
			displayItem();
	}
}


// Display feedback for correct response
function displayFeedbackCorrect() {
	$("#feedback-evaluation").html(feedbackCorrect);
	$("#feedback-message").html(currentItem.feedbackCorrectMessage);
	$("#feedback-image").attr("src",currentItem.feedbackImage);
}


// Display feedback for incorrect response
function displayFeedbackIncorrect() {
	$("#feedback-evaluation").html(feedbackIncorrect);
	$("#feedback-message").html(currentItem.feedbackIncorrectMessage);
	$("#feedback-image").attr("src",currentItem.feedbackImage);

	// Push item issue into array
	issues.push(currentItem.issue);
}


// Evaluate no mistake / yes mistake response
function evaluateResponse(response) {
	if((currentItem.fix == true) && (response == false) && (currentItem.answer == false)) {
		
		$("#prompt").html(currentItem.prompt);
		$("#hint").html(currentItem.hint);
		$("#card-item").hide();
		$("#card-fix").show();

		// Invoke evaluateFixResponse with enter key on input
		document.getElementById("user-fix-response").onkeydown = function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
   			evaluateFixResponse();
   			}
		}

	} else {

		$("#card-item").hide();
		$("#card-feedback").show();

		if(response == currentItem.answer) {
			displayFeedbackCorrect();
			tallyScore();
		} else {
			displayFeedbackIncorrect();
		}
	}
}


// Evaluate fix item response
function evaluateFixResponse() {
	var userFixResponse = $("#user-fix-response").val();

	$("#card-fix").hide();
	$("#card-feedback").show();

	if(userFixResponse == currentItem.correct) {
		displayFeedbackCorrect();
		tallyScore();
	} else {
		displayFeedbackIncorrect();
	}
}


// Tally score
function tallyScore() {
	score = score + 20;
}


// Display results
function displayResults() {
	$("#score").html(score);

	// Display score range icon
	if(score < 49) {
		$("#result-evaluation").html(resultRange1);
	} else if(score <= 69) {
		$("#result-evaluation").html(resultRange2);
	} else if(score <= 89) {
		$("#result-evaluation").html(resultRange3);
	} else {
		$("#result-evaluation").html(resultRange4);
	}

	displayIssues();
}


// Display issues with incorrect responses
function displayIssues() {
	var issueList = document.getElementById("issue-list");
	
	if(issues.length != 0) {
		$("#issue-list").show();
		issueList.innerHTML = "You had a bit of trouble with:";

		for(var i = 0; i < issues.length; i++) {
			issueList.innerHTML += ("<p>" + issues[i] + "</p>");
		}
	}	
}
	

// Reset the game
function resetGame() {
	currentItem = items[0];
	nextItem = 0;
	score = 0;
	issues = [];

	$("#results").hide();
	$("#card-item").show();
	displayItem();
}