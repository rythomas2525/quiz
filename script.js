

var questionDivEl = document.querySelector("#questionDiv");
var quizEl = document.querySelector("#quiz");

var questionText = document.querySelector("#questionText");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var choiceForQuestions = questionArray
console.log(choiceForQuestions)

console.log(questionDivEl)
console.log(quizEl)

console.log(questionText)
console.log(answer1)
console.log(answer2)
console.log(answer3)
console.log(answer4)



var score = 0;
var currentQuestion = {};
var rightAnswers = true;
var questionsList = 5;
var questionCount = [];


var correctScore = 10;
var maxQuestions = 5;








function startGame() {
    questionCount = 0;
    score = 0;
    questionsList = [questionArray];
    console.log(questionsList);
    getQuestion();

}


function getQuestion() {
    questionCount++;
    var questionIndex = Math.floor(Math.random() * questionsList.length)
    currentQuestion = questionsList[questionIndex];
    questionText.innerText = (currentQuestion[0].title)

    // document.getElementById("answer1").innerText = (currentQuestion[0].choices[0])
    // document.getElementById("answer2").innerText = (currentQuestion[0].choices[1])
    // document.getElementById("answer3").innerText = (currentQuestion[0].choices[2])
    // document.getElementById("answer4").innerText = (currentQuestion[0].choices[3])

    choiceForQuestions.forEach(choice => {
        var number = choices.dataset['number'];
        choice.innerText = currentQuestion["choices" + number]
    })




    // questionArray[0].title
}

startGame();

