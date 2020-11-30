const easyScoresList = document.getElementById("easyScoresList");
const mediumScoresList = document.getElementById("mediumScoresList");
const hardScoresList = document.getElementById("hardScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

easyScoresList.innerHTML = 
highScores.map( score => {
    return(`<li class="high-score">${score.name} - ${score.score}</li>`);
}).join("");