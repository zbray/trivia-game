$(document).ready(function(){

  //Global Variables
  var correctCounter;
  var incorrectCounter;
  var unansweredCounter;
  var timeRemaining;

//Displays quiz content, starts countdown, hides start button when user clicks start
$("#startButton").click(function(){
  $("#startButton").hide();
  $("#quizContent").toggle();
});

//Submits Answers, returns totals, returns message based on score, maybe offers reset
$("#submitButton").click(function(){
  $("#quizContent").toggle();
  $("#resultsContent").toggle();
});

//Reset button hides results screen and shows quiz content
//Reset button should reset all variables with integers and uncheck answer choices
$("#resetButton").click(function(){
  $("#startButton").toggle();
  $("#resultsContent").toggle();
})

// Reset button
//   hides results Screen
//   Resets correctCounter 
//   resets inncorrect counter 
//   resets unanswered counter 
//   resets time remaining 
//   resets choices on questions 



});