const timeEl = document.querySelector("#seconds");
const questionEl = document.querySelector("#question");
const questionBtnEl = document.querySelector("#questionBtn");
const startBtnel = document.querySelector("#start");
const questionBoxEl = document.querySelector(".questionBox");
let secondsRemaining = 60;
let score = 0;
let currentIndex = 0;
let submitBtn = document.getElementById("submitBtn");

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
    console.log("Game Over");
    let scores = document.getElementById("scores");
    scores.classList.remove("hide");
    questionBoxEl.classList.add("hide");
    let userScore = document.getElementById("userScore");
    userScore.textContent = score;

}


function startQuiz() {
    let currentQuestion = questions[currentIndex];
    questionEl.innerHTML = "";
    questionBtnEl.innerHTML = "";
    questionEl.textContent = currentQuestion.question;
    for (let i = 0; i < currentQuestion.options.length; i++) {
        console.log(currentQuestion.options[i]);
        let quizBtn = document.createElement("button");
        quizBtn.textContent = currentQuestion.options[i];
        quizBtn.setAttribute("value", currentQuestion.options[i]);
        quizBtn.onclick = solutions;
        questionBtnEl.append(quizBtn);
    }

    // questions: function
    // score++;
    // if (questions[answers])
    // secondsRemaining--;
    // alert("Correct");
    // alert("Wrong");


};

startBtnel.addEventListener("click", function () {
    clock = setInterval(startTimer, 1000);
    console.log("The quiz has begun");
    startBtnel.classList.add("hide");
    startQuiz();
    //look display none css start btn

});
submitBtn.addEventListener("click", function () {
    let initials = document.getElementById("initials");
    let value = initials.value;
    //set local storage with an object that has two keys: player and score

}

)
// function for checking answers

function solutions() {

    console.log(this.value);
    // !== is when
    if (this.value !== questions[currentIndex].answers) {
        alert("Wrong");
        secondsRemaining -= 5;
        timeEl.textContent = secondsRemaining;
    }
    else {
        alert("Correct!");
        secondsRemaining += 5;
        timeEl.textContent = secondsRemaining;
        score++;
    }
    currentIndex++;
    if (currentIndex === questions.length) {
        gameOver();
    }
    else {
        startQuiz();
    }
}