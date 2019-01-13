// Define global variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var targetNumber = getRandomnumber(19,120);
var c1 = getRandomnumber(1,12);
var c2 = getRandomnumber(1,12);
var c3 = getRandomnumber(1,12);
var c4 = getRandomnumber(1,12);

// Define global function(s)
    // Random number is generated for "targetNumber-text"
        function getRandomnumber(min, max) {
        return  Math.floor(Math.random() * (max) + min )
            };
    // Create function that compares the "targetNumber" and "totalScore" to determine how to proceed
    function scoreFunction() { 
        if (totalScore === targetNumber) {
            wins++;
            $("#results-text").text(" You won!");
            $("#wins-text").text(wins);
            reset();
        } else if (totalScore > targetNumber) {
            losses++;
            $("#results-text").text(" You lost!");
            $("#losses-text").text(losses);
            reset();
        } else {
            $("#totalScore-text").text(totalScore);
        }
    };
    // Reset function for when game needs to "restart"
        function reset() {
            totalScore = 0;
            targetNumber = getRandomnumber(19,120);
            var c1 = getRandomnumber(1,12);
            var c2 = getRandomnumber(1,12);
            var c3 = getRandomnumber(1,12);
            var c4 = getRandomnumber(1,12);
            $("#totalScore-text").text(totalScore);
            $("#targetNumber-text").text(targetNumber);
        };

// Display random number in "targetNumber-text"
    $("#targetNumber-text").text(targetNumber);

// On click events...
    // When player clicks on a Crystal 1
    $("#c1").on("click", function() {
        console.log("c1: " + c1); 
        totalScore += c1   ;
        scoreFunction();
    });
    // When player clicks on a Crystal 2
    $("#c2").on("click", function() {
        console.log("c2: " + c2);
        totalScore += c2   ;
        scoreFunction();
    });
    // When player clicks on a Crystal 3
    $("#c3").on("click", function() {
        console.log("c3: " + c3);
        totalScore += c3  ;
        scoreFunction();
    });
    // When player clicks on a Crystal 4
    $("#c4").on("click", function() {
        console.log("c4: " + c4);
        totalScore += c4  ;
        scoreFunction();
    });

