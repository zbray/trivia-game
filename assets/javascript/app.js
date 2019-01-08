$(document).ready(function(){

  //Global Variables
  var counter;
  var correctCounter;
  var incorrectCounter;
  var unansweredCounter;
  var timeRemaining;

//Displays quiz content, starts countdown, hides start button when user clicks start
$("#startButton").click(function(){
  $("#startButton").hide();
  $("#quizContent").toggle();
  var counter = 120;
  setInterval(function(){
    counter--;
    if (counter >= 0) {
      span = document.getElementById("timeRemaining");
      span.innerHTML = counter;
   }
   if (counter === 0) {
      alert("finished!");
      clearInterval(counter);
    }
  }, 1000);
});

//Submits Answers, returns totals, maybe returns message based on score, offers reset
$("#submitButton").click(function(){
  $("#quizContent").toggle();
  $("#resultsContent").toggle();
});

//Reset button unchecks previously selected answers, hides quizContent, hides results screen, resets counter integers
//and displays startButton inviting user to try again.

$("#resetButton").click(function(){
  $("#startButton").toggle();
  $("#resultsContent").toggle();
  $('input[type=radio]').prop('checked', function () {
    return this.getAttribute('checked') == 'checked';
});
})



// Reset button
//   hides results Screen
//   Resets correctCounter 
//   resets inncorrect counter 
//   resets unanswered counter 
//   resets time remaining 
//   resets choices on questions 



});