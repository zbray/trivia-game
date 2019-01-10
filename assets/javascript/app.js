$(document).ready(function(){

//--Global Variables--
  var timer =0;
  var correctCounter=0;
  var incorrectCounter=0;
  var unansweredCounter=0;
  var timeRemaining;
  var numQ = 10;

//--Functions--
function showResults(){
  $("#quizContent").hide();
  $("#resultsContent").show();
};

//--Buttons--
//Start Button - Displays quiz content, starts countdown, hides start button when user clicks start
  $("#startButton").click(function(){
    $("#startButton").hide();
    $("#quizContent").show();
    var timer = 120
    setInterval(function(){
      clearInterval(timer);
      timer--;
      if (timer >= 0) {
        span = document.getElementById("timeRemaining");
        span.innerHTML = timer;
      }
      if (timer === 0) {
        alert("Oh no! Time is up!");
        clearInterval(timer);
        correctCounter=0;
        incorrectCounter=0;
        unansweredCounter=0;
        showResults();
      }
    }, 1000);
  });

//Submit Button - Submits Answers, returns totals, maybe returns message based on score, offers reset
  $("#submitButton").click(function(){
    clearInterval(timer);
    showResults();
    check();
  });

//Reset Button - Unchecks previously selected answers, hides quizContent, hides results screen, resets counter integers
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

//--Function for Checking Answers--
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
      }
    }
    unansweredCounter = numQ - correctCounter - incorrectCounter;
    $("#numCorrect").text(correctCounter);
    $("#numIncorrect").text(incorrectCounter);
    $("#numUnanswered").text(unansweredCounter);
  }
})