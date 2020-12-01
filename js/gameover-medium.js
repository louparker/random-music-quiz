const playerName = document.getElementById("name");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const mediumHighScores = JSON.parse(localStorage.getItem("mediumHighScores")) || [];
const maxHighScores = 5;

finalScore.innerText = mostRecentScore;



playerName.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !playerName.value;
})

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: playerName.value
    };

    mediumHighScores.push(score);

    mediumHighScores.sort( (a,b) => b.score - a.score);

    mediumHighScores.splice(5);

    localStorage.setItem("mediumHighScores", JSON.stringify(mediumHighScores));
    window.location.assign("/");
}