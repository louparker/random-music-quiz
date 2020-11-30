const playerName = document.getElementById("name");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
const maxHighScores = 5;

finalScore.innerText = mostRecentScore;



playerName.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !playerName.value;
})

saveHighScore = e => {
    console.log("clicked save");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: playerName.value
    };

    highScores.push(score);

    highScores.sort( (a,b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");

    console.log(highScores);
}