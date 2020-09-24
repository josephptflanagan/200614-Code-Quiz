var time = 75;
var itterator = 0;
var results = [];
var highScores = [];

var timerVar = null;

var viewHighScoreEl = document.querySelector("#view-high-scores");
var countDownEl = document.querySelector('#count-down');

var frontPageEl = document.querySelector('#front-page');
var startButtonEl = document.querySelector('#start-button');

var quizPageEl = document.querySelector('#quiz-page');
var questionDiv = document.querySelector('#question-div');
var answerDiv = document.querySelector('#answer-div');

var questionEl = document.querySelector("#question");
var answerZeroEl = document.querySelector("#buttonZero");
var answerOneEl = document.querySelector("#buttonOne");
var answerTwoEl = document.querySelector("#buttonTwo");
var answerThreeEl = document.querySelector("#buttonThree");
var previousEl = document.querySelector("#previous");

var endPageEl = document.querySelector("#end-page");
var scoreEl = document.querySelector("#score");

var highScorePageEl = document.querySelector("#high-score-page");
var highScoreTableEl = document.querySelector("#high-score-table");

var slideOne = {
    question: "Commonly used data types DO not Include: ",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctIndex: 2
};

var slideTwo = {
    question: "The condition in an if/else statement is enclosed with: ",
    answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctIndex: 2
};

var slideThree = {
    question: "Arrays in JavaScript can be used to store: ",
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctIndex: 3
};

var slideFour = {
    question: "String values must be enclosed within _______ when being assigned to variables",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctIndex: 2
};

var slideFive = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    correctIndex: 3
};

var questionSlides = [slideOne, slideTwo, slideThree, slideFour, slideFive];


function question() {

    questionEl.textContent = questionSlides[itterator].question;
    answerZeroEl.textContent = questionSlides[itterator].answers[0];
    answerOneEl.textContent = questionSlides[itterator].answers[1];
    answerTwoEl.textContent = questionSlides[itterator].answers[2];
    answerThreeEl.textContent = questionSlides[itterator].answers[3];

    if (itterator > 0) {
        previousEl.textContent = results[itterator - 1]
    }

}

function answerHandler(answer) {


    if (answer == questionSlides[itterator].correctIndex) {
        results.push("Correct")
    }
    else {
        results.push("Incorrect")
        time -= 10;
    }

    itterator++;

    if (itterator <= 4) {
        question();
    }
    else {
        let score = time;
        endScreen(score);
    }
}


function endScreen(score) {

    quizPageEl.setAttribute("style", "display: none;");
    endPageEl.setAttribute("style", "display: block;");
    viewHighScoreEl.setAttribute("style", "display: none;");

    clearInterval(timerVar);

    scoreEl.textContent = "Your final score is   " + score;
    countDownEl.textContent = "";

}

function highScoreHandler(){

    frontPageEl.setAttribute("style", "display: none;");
    quizPageEl.setAttribute("style", "display: none;");
    endPageEl.setAttribute("style", "display: none;");
    highScorePageEl.setAttribute("style", "display: block;");
    viewHighScoreEl.setAttribute("style", "display: none;");
    countDownEl.textContent = "";
    
}

function quizInitializer() {

    viewHighScoreEl.setAttribute("style", "display: none;");
    frontPageEl.setAttribute("style", "display: none;");
    quizPageEl.setAttribute("style", "display: block;");
    
    timerVar = setInterval(scoreTimer, 1000)

    question();

}

function scoreTimer() {

    countDownEl.textContent = "Time: " + time;
    time--;

    if (time < 0) {
        endScreen(0);
    }

}

function tableHandler() {

    var highScoreMaker = document.querySelector("input[name='name']").value;

};

function createRowEl() {

};

viewHighScoreEl.addEventListener("click", highScoreHandler);
startButtonEl.addEventListener("click", quizInitializer);
answerZeroEl.addEventListener("click", function () { answerHandler(0) });
answerOneEl.addEventListener("click", function () { answerHandler(1) });
answerTwoEl.addEventListener("click", function () { answerHandler(2) });
answerThreeEl.addEventListener("click", function () { answerHandler(3) });
