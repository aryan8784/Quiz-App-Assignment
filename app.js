var dataSet = [
    {
        question: "What is the capital of France?",
        option_a: "Paris",
        option_b: "Rome",
        option_c: "Berlin",
        option_d: "Madrid",
        answer: "option_a",
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        option_a: "Charles Dickens",
        option_b: "William Shakespeare",
        option_c: "Jane Austen",
        option_d: "F. Scott Fitzgerald",
        answer: "option_b",
    },
    {
        question: "What is the chemical symbol for gold?",
        option_a: "Go",
        option_b: "Ag",
        option_c: "Au",
        option_d: "Ge",
        answer: "option_c",
    },
    {
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        option_a: "Oxygen (O2)",
        option_b: "Nitrogen (N2)",
        option_c: "Carbon dioxide (CO2)",
        option_d: "Hydrogen (H2)",
        answer: "option_c",
    },
    {

        question: "Which planet is known as the Red Planet?",
        option_a: "Mars",
        option_b: "Venus",
        option_c: "Jupiter",
        option_d: "Saturn",
        answer: "option_a",
    },
    {
        question: "What is the largest mammal in the world?",
        option_a: "Elephant",
        option_b: "Giraffe",
        option_c: "Blue Whale",
        option_d: "Dolphin",
        answer: "option_c",
    },
]

var attemptQuestion = 0;
var countDown;
var timer = 10;


// ----Result
var skipQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var totalQuestion = dataSet.length;


var option_a = document.getElementById("option_a");
var option_b = document.getElementById("option_b");
var option_c = document.getElementById("option_c");
var option_d = document.getElementById("option_d");
var timing = document.getElementById("timing");


var currentQuestion = dataSet[attemptQuestion];

function renderQuestion() {


    option_a.className = "alert alert-dark"
    option_b.className = "alert alert-dark"
    option_c.className = "alert alert-dark"
    option_d.className = "alert alert-dark"

    var questionField = document.querySelector('.question');
    var questionCount = document.getElementById("questionCount");

    questionField.innerHTML = currentQuestion.question;
    questionCount.innerHTML = `${attemptQuestion + 1} of ${dataSet.length} Question`

    option_a.innerHTML = currentQuestion.option_a;
    option_b.innerHTML = currentQuestion.option_b;
    option_c.innerHTML = currentQuestion.option_c;
    option_d.innerHTML = currentQuestion.option_d;

}

function nextQuestion() {
    // attemptQuestion += +1;
    attemptQuestion = attemptQuestion + 1;
    currentQuestion = dataSet[attemptQuestion];

    renderQuestion()
    startTimer()
    clearInterval(countDown)
    timer =10;

    if((attemptQuestion + 1) == dataSet.length){
        // alert("Last")
        var result = {
            skipQuestion : skipQuestion,
            correctAnswer : correctAnswer,
            wrongAnswer : wrongAnswer,
            totalQuestion : totalQuestion,
        }
        localStorage.setItem('result', JSON.stringify(result))
        location.replace("result.html")
        return
    }

}

function clickedOption(selectedOption) {
    if (selectedOption == "option_a") {
        if (currentQuestion.answer == selectedOption) {
            option_a.className = "alert alert-success"
            correctAnswer = correctAnswer +1;
        } else {
            option_a.className = "alert text-bg-danger"
            wrongAnswer = wrongAnswer + 1
        }
    }

    if (selectedOption == "option_b") {
        if (currentQuestion.answer == selectedOption) {
            option_b.className = "alert alert-success"
            correctAnswer = correctAnswer +1;
        } else {
            option_b.className = "alert text-bg-danger"
            wrongAnswer = wrongAnswer + 1
        }
    }

    if (selectedOption == "option_c") {
        if (currentQuestion.answer == selectedOption) {
            option_c.className = "alert alert-success"
            correctAnswer = correctAnswer +1;
        } else {
            option_c.className = "alert text-bg-danger"
            wrongAnswer = wrongAnswer + 1
        }
    }

    if (selectedOption == "option_d") {
        if (currentQuestion.answer == selectedOption) {
            option_d.className = "alert alert-success"
            correctAnswer = correctAnswer +1;
        } else {
            option_d.className = "alert text-bg-danger"
            wrongAnswer = wrongAnswer + 1
        }
    }
    if (currentQuestion.answer == "option_a") {
        option_a.className = "alert text-bg-success"
    }
    if (currentQuestion.answer == "option_b") {
        option_b.className = "alert text-bg-success"
    }
    if (currentQuestion.answer == "option_c") {
        option_c.className = "alert text-bg-success"
    }
    if (currentQuestion.answer == "option_d") {
        option_d.className = "alert text-bg-success"
    }

    setTimeout(function () {
        nextQuestion()
    }, 1000)

}

function startTimer() {
     countDown = setInterval(function () {
        timer = timer - 1;
        timing.innerHTML = `${timer} sec`;
        if (timer <= 0) {
            nextQuestion()
            timer = 10;
            skipQuestion = skipQuestion + 1;
            clearInterval(countDown)
        }
    }, 1000);
}

startTimer()
renderQuestion()