$(document).ready(function(){

  //Global Variables
  var counter;
  var correctCounter= 0;
  var incorrectCounter;
  var unansweredCounter;
  var timeRemaining;


// -----BUTTONS-----
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
      check();
    }
  }, 1000);
});

//Submits Answers, returns totals, maybe returns message based on score, offers reset
$("#submitButton").click(function(){
  $("#quizContent").toggle();
  $("#resultsContent").toggle();
  check();
});

//Reset button unchecks previously selected answers, hides quizContent, hides results screen, resets counter integers
//and displays startButton inviting user to try again.
$("#resetButton").click(function(){
  $("#startButton").toggle();
  $("#resultsContent").toggle();
  $('input[type=radio]').prop('checked', function () {
    return this.getAttribute('checked') == 'checked';
});
});

//-----Question Check-----
function check (){
  
}




})