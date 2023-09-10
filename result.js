resultData = JSON.parse(localStorage.getItem('result'));

var totalQuestion = document.getElementById("totalQuestion");
var skipQuestion = document.getElementById("skipQuestion");
var correctAnswer = document.getElementById("correctAnswer");
var wrongAnswer = document.getElementById("wrongAnswer");

 
totalQuestion.innerHTML = resultData.totalQuestion;
skipQuestion.innerHTML = resultData.skipQuestion;
correctAnswer.innerHTML = resultData.correctAnswer;
wrongAnswer.innerHTML = resultData.wrongAnswer;
