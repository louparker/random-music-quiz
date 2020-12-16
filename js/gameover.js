const playerName = document.getElementById("name");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const easyHighScores = JSON.parse(localStorage.getItem("easyHighScores")) || [];
const mediumHighScores = JSON.parse(localStorage.getItem("mediumHighScores")) || [];
const hardHighScores = JSON.parse(localStorage.getItem("hardHighScores")) || [];
const maxHighScores = 5;
const gameDifficulty = window.location.search.replace("?mode=", "");
console.log(window.location)


//setting most recent game score to the final score element
finalScore.innerText = mostRecentScore;

//disabling the save button until user has entered a value in input element
playerName.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !playerName.value;
})

saveHighScore = e => {
    e.preventDefault();

//setting up score data for highscores page
    const score = {
        score: mostRecentScore,
        name: playerName.value
    };
    
//sending the correct high scores to the correct difficulty level on the high scores page
    if (gameDifficulty === "easy") {
        easyHighScores.push(score);
        easyHighScores.sort( (a,b) => b.score - a.score);
        easyHighScores.splice(5);
        localStorage.setItem("easyHighScores", JSON.stringify(easyHighScores));
        window.location.assign("/");
    } else if (gameDifficulty == "medium") {
        mediumHighScores.push(score);
        mediumHighScores.sort( (a,b) => b.score - a.score);
        mediumHighScores.splice(5);
        localStorage.setItem("mediumHighScores", JSON.stringify(mediumHighScores));
        window.location.assign("/");
    } else {
        hardHighScores.push(score);
        hardHighScores.sort( (a,b) => b.score - a.score);
        hardHighScores.splice(5);
        localStorage.setItem("hardHighScores", JSON.stringify(hardHighScores));
        window.location.assign("/");
    }
}

