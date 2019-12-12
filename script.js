
var question = document.getElementById("questionText");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    getNewQuestion();
};

getNewQuestion = () => {
    var count = 15;
    var interval = setInterval(function () {
        document.getElementById('timeleft').innerHTML = (" " + count);
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('timeleft').innerHTML = '';

        }
    }, 1000);

    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
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

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];


        var classToApply = "incorrect";
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = "correct";
        }
        if (classToApply === "correct") {
            scoreCheck(CORRECT_BONUS)
        }
        console.log(classToApply)

        // selectedChoice.parentElement.classList.add(classToApply);
        // setTimeout(() => { })
        // selectedChoice.parentElement.classList.remove(classToApply)

        getNewQuestion();

    });
});

scoreCheck = num => {
    score += num;
    scoreText.innerText = score;

}

startGame();



