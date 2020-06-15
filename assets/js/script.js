var time = 75;

var table = document.getElementById("#high-score-table");
var countDown = document.getElementById('count-down');
var startButton = document.querySelector('#start-button');

var slideOne = {
    question: "Commonly used data types DO not Include: ",
    a:"1. strings",
    b:"2. booleans",
    c:"3. alerts",
    d:"4. numbers",
    correct: 3
};

var slideTwo = {
    question: "The condition in an if/else statement is enclosed with: ",
    a:"1. quotes",
    b:"2. curly brackets",
    c:"3. parenthesis",
    d:"4. square brackets",
    correct: 3
};

var slideThree = {
    question: "Arrays in JavaScript can be used to store: ",
    a:"1. numbers and strings",
    b:"2. other arrays",
    c:"3. booleans",
    d:"4. all of the above",
    correct: 4
};

var slideFour = {
    question: "String values must be enclosed within _______ when being assigned to variables",
    a:"1. commas",
    b:"2. curly brackets",
    c:"3. quotes",
    d:"4. parenthesis",
    correct: 3
};

var slideFive = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    a:"1. JavaScript",
    b:"2. terminal/bash",
    c:"3. for loops",
    d:"4. console.log",
    correct: 4
};

var questionSlides = [slideOne, slideTwo, slideThree, slideFour, slideFive];
var answers = [0,0,0,0];

var endScreen = function(){

}

/*var awaitAnswer = function(){
    var answered = false;

    while (!answered){

    }
}*/

var quizPage = function(questionNumber){

    var frontPage = document.getElementById('front-page');
    frontPage.setAttribute("style", "display: none;");

    var questionDiv = document.getElementById('question-div');

    var quizPage = document.getElementById('quiz-page');
    quizPage.setAttribute("style", "display: block;")
    
    var quizTitle = document.createElement("h2");
    quizTitle.className = "quiz-title";
    var quizQuestionA = document.createElement("button");
    quizQuestionA.className = "quiz-button";

    var quizQuestionB = document.createElement("button");
    quizQuestionB.className = "quiz-button";

    var quizQuestionC = document.createElement("button");
    quizQuestionC.className = "quiz-button";

    var quizQuestionD = document.createElement("button");
    quizQuestionD.className = "quiz-button";


    quizTitle.textContent = questionSlides[questionNumber].question;
    quizQuestionA.textContent = questionSlides[questionNumber].a;
    quizQuestionB.textContent = questionSlides[questionNumber].b;
    quizQuestionC.textContent = questionSlides[questionNumber].c;
    quizQuestionD.textContent = questionSlides[questionNumber].d;

    questionDiv.appendChild(quizQuestionA);
    questionDiv.appendChild(quizQuestionB);
    questionDiv.appendChild(quizQuestionC);
    questionDiv.appendChild(quizQuestionD);

    quizPage.appendChild(quizTitle);
    quizPage.appendChild(questionDiv);

}

var quizFunction = function(){

    scoreHandler();

    var answered = false;

    var a = []

    for(var i = 0;i<questionSlides.length;i++){
        answers[i] = quizPage(i);
        if(answers[i] !== questionSlides[i].correct){
            //time-=10;
        }
    };

    endScreen();
}

function scoreHandler() {
    // Create the countdown timer.

    var interval = setInterval(function(){
      countDown.textContent = "Time: " + time;
      time--;
  
      if(time < 0){
        countDown.textContent = "";
        clearInterval(interval);
      }
  
    }, 1000);
    
  }

var tableHandler = function(){
    var highScoreMaker = document.querySelector("input[name='name']").value;
    
};   

var createRowEl = function(){

};

startButton.addEventListener("click", quizFunction);