const playerName = document.getElementById("name");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const hardHighScores = JSON.parse(localStorage.getItem("hardHighScores")) || [];
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

    hardHighScores.push(score);

    hardHighScores.sort( (a,b) => b.score - a.score);

    hardHighScores.splice(5);

    localStorage.setItem("hardHighScores", JSON.stringify(hardHighScores));
    window.location.assign("/");
}