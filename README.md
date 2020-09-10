# codeQuizGIVEN I am taking a code quiz
# WHEN I click the start button
# THEN a timer starts and I am presented with a question
$(".start").on("click")

function startTimer


const timeEl = document.querySelector(".time");
let secondsRemaining = 60;

# WHEN I answer a question
# THEN I am presented with another question
(code to place questions with the <div class="questionBox">) $(".questionBox").html() if its jQuery

const questions =

let q1{
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>" , "<scripting>" , "<javascript>", "<js>"],
    a: "<script>",

    if (an)

}

let q2{
    question: "What is the correct syntax for referring to an external script called "xxx.js"?",
    options: ["<script src="xxx.js">" , "<script name="xxx.js">" , "<script href="xxx.js">"],
    a: "<script src="xxx.js">    ",


}

let q3{
    question: "How do you write "Hello World" in an alert box?",
    options: ["alert("Hello World");", "alertBox("Hello World");" , "msgBox("Hello World");" , "msg("Hello World");"],
    a: "alert("Hello World");",

}

let q4{
    question: "How to write an IF statement for executing some code if "i" is NOT equal to 5?",
    options: ["if (i != 5)" , "if i =! 5 then" , "if i <> 5" , "if (i <> 5)"],
    a: "if (i != 5)",

}

let q5{
    question: "How does a FOR loop start?",
    options: ["for (i = 0; i <= 5; i++)" , "for (i = 0; i <= 5)" , "for i = 1 to 5" , "for (i <= 5; i++)"],
    a: "for (i = 0; i <= 5; i++)",

}

alert("Correct!")
alert("Incorrect")


# WHEN I answer a question incorrectly
# THEN time is subtracted from the clock
secondsRemaining--;

# WHEN all questions are answered or the timer reaches 0
# THEN the game is over

# WHEN the game is over
# THEN I can save my initials and score
let score = 0;
score ++;