//overriding global variables
var time = 75;
var itterator = 0;
var score = 0;
var results = [];
var highScores = [];

//timer variable
var timerVar = null;

//Grabs header html elements
var viewHighScoreEl = document.querySelector("#view-high-scores");
var countDownEl = document.querySelector('#count-down');

//Grabs front page html elements
var frontPageEl = document.querySelector('#front-page');
var startButtonEl = document.querySelector('#start-button');

//Grabs quiz page html elements
var quizPageEl = document.querySelector('#quiz-page');
var questionDiv = document.querySelector('#question-div');
var answerDiv = document.querySelector('#answer-div');
var questionEl = document.querySelector("#question");
var answerZeroEl = document.querySelector("#buttonZero");
var answerOneEl = document.querySelector("#buttonOne");
var answerTwoEl = document.querySelector("#buttonTwo");
var answerThreeEl = document.querySelector("#buttonThree");
var previousEl = document.querySelector("#previous");

//Grabs end page html elements
var endPageEl = document.querySelector("#end-page");
var scoreEl = document.querySelector("#score");
var scoreButtonEl = document.querySelector("#score-button");

//Grabs high score page html elements
var highScorePageEl = document.querySelector("#high-score-page");
var highScoreTableEl = document.querySelector("#high-score-table");
var goBackButtonEl = document.querySelector("#go-back");
var clearHighScoreButtonEl = document.querySelector("#clear-high-score");

//Question Slides
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

//populates the question and answers html elements with data specific
//to each question
function quizPageHandler() {

    questionEl.textContent = questionSlides[itterator].question;
    answerZeroEl.textContent = questionSlides[itterator].answers[0];
    answerOneEl.textContent = questionSlides[itterator].answers[1];
    answerTwoEl.textContent = questionSlides[itterator].answers[2];
    answerThreeEl.textContent = questionSlides[itterator].answers[3];

    //Starting On Question 2, this element is populated with the outcome of
    //the previous question
    if (itterator > 0) {
        previousEl.textContent = results[itterator - 1]
    }

}

//Handles the comparison between user provided and correct answers,
//filling the results array and subtracting time if necessary.
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
        quizPageHandler();
    }
    else {
        score = time;
        //debugger;
        endScreenHandler();
    }
}

//Initializes the End Screen
function endScreenHandler() {

    //Hide Quiz Page html, Enable End Page html
    quizPageEl.setAttribute("style", "display: none;");
    endPageEl.setAttribute("style", "display: block;");
    countDownEl.textContent = "";

    //Stops the Timer
    clearInterval(timerVar);

    //populates the score on the page
    scoreEl.textContent = "Your final score is   " + score;

}

//grabs user input from input and sends it along with the user
//score to the high score page handler
function createTableEntry() {

    let initials = document.getElementById("initial-box").value;
    let tempHighScore = {
        name: initials,
        score: score
    };

    //adds the new score to the high score page
    highScores.push(tempHighScore)

    //call the score sort function
    scoreSort();

    //save the scores to local storage
    saveScores();

    //call the high score page
    highScoreHandler();
}

//Makes the High Score page visible
function highScoreHandler() {

    //Hide Front Page html, End Page html, high score button, and CountDown
    frontPageEl.setAttribute("style", "display: none;");
    endPageEl.setAttribute("style", "display: none;");
    viewHighScoreEl.setAttribute("style", "display: none;");
    countDownEl.textContent = "";

    //Enable High Score Page html
    highScorePageEl.setAttribute("style", "display: block;");

    //load highScores
    loadScores();

    //empty the table
    highScoreTableEl.innerHTML = "";

    for (let i = 0; i < highScores.length; i++) {
        //create the contents of a cell
        let cellFill = (i + 1) + ". " + highScores[i].name + " - " + highScores[i].score

        //create a row
        let row = highScoreTableEl.insertRow(i);

        //create a cell in the row
        let cell = row.insertCell(0)

        //fill the cell with generated contents
        cell.innerHTML = cellFill;
    }


}


function returnToFront() {
    //hides the high score page
    highScorePageEl.setAttribute("style", "display: none;");

    //Shows the Front Page, view high score button
    frontPageEl.setAttribute("style", "display: block;");
    viewHighScoreEl.setAttribute("style", "display: block;");

    //reset the itterator, timer, score, results, previous answer result
    time = 75;
    itterator = 0;
    score = 0;
    results = [];
    previousEl.textContent = "";

}

function scoreSort() {

    highScores = highScores.sort(function (a, b) {
        return b.score - a.score;
    });

}

function clearScores() {

    highScores = [];
    localStorage.clear();
    highScoreHandler();
    window.alert("High Scores Cleared");

}

//handles the basic processes required to start the quiz
function quizInitializer() {

    //Hides the Front page html elements, view high score button
    viewHighScoreEl.setAttribute("style", "display: none;");
    frontPageEl.setAttribute("style", "display: none;");

    //populates the quiz page elements, enables view of timer
    quizPageEl.setAttribute("style", "display: block;");
    countDownEl.setAttribute("style", "display: block;");

    //starts the timer
    timerVar = setInterval(scoreTimer, 1000)

    //starts the quiz
    quizPageHandler();

}

//Timer Function
function scoreTimer() {

    //populates the CountDown Timer
    countDownEl.textContent = "Time: " + time;
    //Removes 1 from the time variable for ever 1000ms that pass
    time--;

    //if time drops to zero, populates the endscreen, sends a score of 0
    if (time < 0) {
        endScreenHandler(0);
    }

}

function saveScores(){
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function loadScores(){
    highScores = JSON.parse(localStorage.getItem("highScores"));
    if (!highScores){
        highScores = [];
    }
}

//Adds Event Listeners for the omnipresent buttons that don't
//have to send user created data
viewHighScoreEl.addEventListener("click", highScoreHandler);
startButtonEl.addEventListener("click", quizInitializer);
scoreButtonEl.addEventListener("click", createTableEntry);
answerZeroEl.addEventListener("click", function () { answerHandler(0) });
answerOneEl.addEventListener("click", function () { answerHandler(1) });
answerTwoEl.addEventListener("click", function () { answerHandler(2) });
answerThreeEl.addEventListener("click", function () { answerHandler(3) });
goBackButtonEl.addEventListener("click", returnToFront);
clearHighScoreButtonEl.addEventListener("click", clearScores);



