
var question = document.getElementById("questionText");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



var ScoreIfCorrect = 0;
var AmountOfQuestions = 3;



startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    getNewQuestion();
};

var count = 60;
var interval = setInterval(function () {
    document.getElementById('timeleft').innerHTML = (" " + count);
    count--;
    if (count === 0) {
        clearInterval(interval);
        document.getElementById('timeleft').innerHTML = '';

    }
}, 1000);

// var CORRECT_BONUS = count;

getNewQuestion = () => {


    if (availableQuestions.length === 0 || questionCounter > AmountOfQuestions) {
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("finish.html");
    }

    questionCounter++;

    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.title;


    choices.forEach(choice => {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion['choice' + number];
    });



    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        console.log(e.target);

        var selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);


        var classToApply = "incorrect";
        console.log(currentQuestion.answer);

        if (selectedAnswer != currentQuestion.answer) {

            count -= 15;
            // classToApply = "correct";
        }

        else {


            ScoreIfCorrect += count;
            scoreFunction(ScoreIfCorrect)

        }


        // selectedChoice.parentElement.classList.add(classToApply);
        // setTimeout(() => { })
        // selectedChoice.parentElement.classList.remove(classToApply)

        getNewQuestion();

    });
});

scoreFunction = number => {
    score += number;
    scoreText.innerText = score;

}

startGame();



