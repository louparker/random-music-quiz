const playerName = document.getElementById("name");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const easyHighScores = JSON.parse(localStorage.getItem("easyHighScores")) || [];
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

    easyHighScores.push(score);

    easyHighScores.sort( (a,b) => b.score - a.score);

    easyHighScores.splice(5);

    localStorage.setItem("easyHighScores", JSON.stringify(easyHighScores));
    window.location.assign("/");
}