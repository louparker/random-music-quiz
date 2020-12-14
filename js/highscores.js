const easyScoresList = document.getElementById("easyScoresList");
const mediumScoresList = document.getElementById("mediumScoresList");
const hardScoresList = document.getElementById("hardScoresList");
const easyHighScores = JSON.parse(localStorage.getItem("easyHighScores")) || [];
const mediumHighScores = JSON.parse(localStorage.getItem("mediumHighScores")) || [];
const hardHighScores = JSON.parse(localStorage.getItem("hardHighScores")) || [];

//grabbing the high scores data for each difficulty & adding a new list item for each one.
easyScoresList.innerHTML = 
easyHighScores.map( score => {
    return(`<li class="high-score">${score.name} - ${score.score}</li>`);
}).join("");

mediumScoresList.innerHTML = 
mediumHighScores.map( score => {
    return(`<li class="high-score">${score.name} - ${score.score}</li>`);
}).join("");

hardScoresList.innerHTML = 
hardHighScores.map( score => {
    return(`<li class="high-score">${score.name} - ${score.score}</li>`);
}).join("");