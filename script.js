const timeEl = document.querySelector("#seconds");
const questionEl = document.querySelector("#question");
const questionBtnEl = document.querySelector("#questionBtn");
const startBtnel = document.querySelector("#start");
let secondsRemaining = 60;
let score = 0;
let currentIndex = 0;

let clock;

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<scripting>", "<javascript>", "<js>"],
        answers: "<script>",



    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["<script src='xxx.js'>", "<script name='xxx.js'>", "<script href='xxx.js'>"],
        answers: "<script src='xxx.js'>",


    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "msg('Hello World');"],
        answers: "alert('Hello World');",

    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: ["if (i != 5)", "if i =! 5 then", "if i <> 5", "if (i <> 5)"],
        answers: "if (i != 5)",

    },
    {
        question: "How does a FOR loop start?",
        options: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)"],
        answers: "for (i = 0; i <= 5; i++)",

    }


];

function startTimer() {
    secondsRemaining--;
    timeEl.textContent = secondsRemaining;

    if (secondsRemaining <= 0) {
        secondsRemaining = 0;
        timeEl.textContent = secondsRemaining;
        gameOver();
    }

}
//endgame function
function gameOver() {
    clearInterval(clock);

}

/*function startQuiz() {
    if (questions[answers])
        let correctAns = answers;
    // pull objects options

});*/

startBtnel.addEventListener("click", function () {
    clock = setInterval(startTimer, 1000);
    console.log("i was clicked");
    startQuiz();
    //look display none css start btn
});

// function for checking answers