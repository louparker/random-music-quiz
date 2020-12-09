const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice__text"));
const scoreText = document.getElementById('score');
const timer = document.getElementById("timer");

/* STARTING GAME */

const gameDifficulty = window.location.search.replace("?mode=", "");

// timer
function restartInterval(){
    let seconds = document.getElementById("timer").textContent;
    let countdown = setInterval(function() {
        seconds--;

      choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            clearInterval(countdown);
            timer.innerText = "30";
            restartInterval();
        });
    });
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
            getNewQuestion();
            timer.innerText = "30";
            restartInterval();
        }
    }, 1000);
}

console.log(gameDifficulty);



//game mechanics

let currentQuestion = {};
let takingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};
let fetchingData = true;

fetch(`https://opentdb.com/api.php?amount=10&category=12&difficulty=${gameDifficulty}&type=multiple`)
    .then(res => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });

        fetchingData = false;
        setTimeout( () => {
            startGame();
            restartInterval();
        }, 4000);
    })
    .catch((err) => {
        console.error(err);
    });

let correctPoints = 10;
const maxQuestions = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};



getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('/gameover-medium.html');
    }

    questionCounter ++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    takingAnswers = true;

};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!takingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        if (classToApply === "correct") {
            incrementScore(correctPoints);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerHTML = score;
};
