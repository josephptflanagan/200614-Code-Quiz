var time = 75;
var itterator = 0;
var results = []
var highScores = []

var table = document.querySelector("#high-score-table");
var countDown = document.querySelector('#count-down');

var frontPage = document.querySelector('#front-page');
var startButton = document.querySelector('#start-button');

var quizPage = document.querySelector('#quiz-page');
var questionDiv = document.querySelector('#question-div');
var answerDiv = document.querySelector('#answer-div');

var questionEl = document.querySelector("#question");
var answerZeroEl = document.querySelector("#buttonZero");
var answerOneEl = document.querySelector("#buttonOne");
var answerTwoEl = document.querySelector("#buttonTwo");
var answerThreeEl = document.querySelector("#buttonThree");
var previousEl = document.querySelector("#previous");

var endPage = document.querySelector("#end-page");

var slideOne = {
    question: "Commonly used data types DO not Include: ",
    answers: ["1. strings","2. booleans", "3. alerts", "4. numbers"],
    correctIndex: 2
};

var slideTwo = {
    question: "The condition in an if/else statement is enclosed with: ",
    answers:["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctIndex: 2
};

var slideThree = {
    question: "Arrays in JavaScript can be used to store: ",
    answers:["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctIndex: 3
};

var slideFour = {
    question: "String values must be enclosed within _______ when being assigned to variables",
    answers:["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctIndex: 2
};

var slideFive = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers:["1. JavaScript",  "2. terminal/bash", "3. for loops", "4. console.log"],
    correctIndex: 3
};

var questionSlides = [slideOne, slideTwo, slideThree, slideFour, slideFive];


function question(){

    questionEl.textContent = questionSlides[itterator].question;
    answerZeroEl.textContent = questionSlides[itterator].answers[0];
    answerOneEl.textContent = questionSlides[itterator].answers[1];
    answerTwoEl.textContent = questionSlides[itterator].answers[2];
    answerThreeEl.textContent = questionSlides[itterator].answers[3];

    if(itterator > 0){
        previousEl.textContent = results[itterator-1]
    }

}

function answerHandler(answer){
    

    if(answer == questionSlides[itterator].correctIndex){
        results.push("Correct")
    }
    else{
        results.push("Incorrect")
    }

    itterator++;

    if(itterator <= 4){
        question();
    }
    else{
        endScreen();
    }
}


function endScreen (){

    
    quizPage.setAttribute("style", "display: none;")
    endPage.setAttribute("style", "display: block;");

}

function quizInitializer() {

    frontPage.setAttribute("style", "display: none;");
    quizPage.setAttribute("style", "display: block;");
    

    scoreHandler();

    question();

    //endScreen();
}

function scoreHandler() {
    // Create the countdown timer.

    var interval = setInterval(function(){
      countDown.textContent = "Time: " + time;
      time--;
  
      if(time < 0){
        endScreen();
        countDown.textContent = "";
        clearInterval(interval);
      }
  
    }, 1000);
    
  }

function tableHandler() {
    var highScoreMaker = document.querySelector("input[name='name']").value;
    
};   

function createRowEl() {

};

startButton.addEventListener("click",quizInitializer);
answerZeroEl.addEventListener("click", function(){answerHandler(0)});
answerOneEl.addEventListener("click",  function(){answerHandler(1)});
answerTwoEl.addEventListener("click",  function(){answerHandler(2)});
answerThreeEl.addEventListener("click",  function(){answerHandler(3)});
