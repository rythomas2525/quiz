console.log(questionArray)

var questionDivEl = document.querySelector("#questionDiv");
var quizEl = document.querySelector("quiz");
var startButton = document.querySelector("#startButton")

startButton.addEventListener("click", function () {

    location.href = 'quiz.html';


})



for (var i = 0; i < questionArray.length; i++) {
    console.log(questionArray[i])

}


