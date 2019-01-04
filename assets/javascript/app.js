$(document).ready(function(){

  //Global Variables
  var correctCounter;
  var incorrectCounter;
  var unansweredCounter;
  var timeRemaining;


// Hides gameScreen at start
// $("#gameScreen").hide();

//Displays quiz content, and starts countdown, hides start button when user clicks start
$("#startButton").click(function(){
  $("#startButton").hide();
  $("#quizContent").toggle();
});

$("#submitButton").click(function(){
  $("#quizContent, #resultContent").toggle();
})


// Reset button
//   hides results Screen
//   Resets correctCounter 
//   resets inncorrect counter 
//   resets unanswered counter 
//   resets time remaining 
//   resets choices on questions 





//Questions
});