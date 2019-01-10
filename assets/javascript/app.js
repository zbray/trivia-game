$(document).ready(function(){

  //Global Variables
  var counter;
  var correctCounter=0;
  var incorrectCounter=0;
  var unansweredCounter=0;
  var timeRemaining;
  var numQ = 10;

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
      showResults();
    }
  }, 1000);
});

//Submits Answers, returns totals, maybe returns message based on score, offers reset
function showResults(){
  $("#quizContent").toggle();
  $("#resultsContent").toggle();
};

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
  correctCounter=0;
  incorrectCounter=0;
  unansweredCounter=0;
});

//-----Question Check-----
function check(){
  for(var i = 1; i <= numQ; i++) {
    var radios = document.getElementsByName("q" + i);
    for(var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if(radio.value === "correct" && radio.checked) {
        correctCounter++;
      }
      if(radio.value === "incorrect" && radio.checked) {
        incorrectCounter++;
      }
      // else{
      //   unansweredCounter++;
      // }
    }
  }
  unansweredCounter = numQ - correctCounter - incorrectCounter;
  $("#numCorrect").text(correctCounter);
  $("#numIncorrect").text(incorrectCounter);
  $("#numUnanswered").text(unansweredCounter);
  // numCorrect
  // numIncorrect
  // numUnanswered
}
})