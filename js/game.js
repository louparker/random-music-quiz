const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice__container"));
const scoreText = document.getElementById('score');
const timer = document.getElementById("timer");
const game = document.getElementById("game");
const loader = document.getElementById("loader");
const gameDifficulty = window.location.search.replace("?mode=", "");

/* STARTING GAME */
//game mechanics

let currentQuestion = {};
let takingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};
let fetchingData = true;
let acceptingAnswers = true;
let questions = [];


//taking data from API
fetch(`https://opentdb.com/api.php?amount=10&category=12&difficulty=${gameDifficulty}&type=multiple`)
    .then(res => {
        return res.json();
    })
    //taking question data from API and formatting it to be used
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            //taking answer data and choosing random place for correct and incorrect answers
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

        // timer
        //Setting correct time for each level
        if (gameDifficulty === "easy") {
            timer.innerText = "90";
        } else if (gameDifficulty == "medium") {
            timer.innerText = "80";
        } else {
            timer.innerText = "70";
        }

        //function to start the timer on end of current time or start of new question
        function restartInterval() {
            let seconds = document.getElementById("timer").textContent;
            let countdown = setInterval(function () {
                seconds--;


                //timer reaches zero restart function
                document.getElementById("timer").textContent = seconds;
                if (seconds <= 0) {
                    clearInterval(countdown);
                    localStorage.setItem("mostRecentScore", score);
                    return window.location.replace(`${baseUrl}/gameover.html?mode=${gameDifficulty}`);
                }
            }, 1000);
        }



        //confirming game data is all loaded, showing the game page and removing the loading screen
        fetchingData = false;
        setTimeout(() => {
            game.classList.remove("hidden");
            loader.classList.add("hidden");
            startGame();
            restartInterval();
        }, 1000);
    })
    .catch((err) => {
        console.error(err);
    });

//base set up for loading the game page
const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

//giving specific scores based on gae difficulty
const levelScore = gameDifficulty === "easy" ? 10 :
    gameDifficulty === "medium" ? 20 :
    30;

const maxQuestions = 10;
let baseUrl = "https://louparker.github.io/random-music-quiz";

//checking if answers are correct or not
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!takingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        if (classToApply === "correct") {
            incrementScore(levelScore);
        }

        selectedChoice.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
//adds specified score to score element
const incrementScore = (num) => {
    score += num;
    scoreText.innerHTML = score;
};


//grabbing new question data and assigning score & redirecting to gameover page
const getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.replace(`${baseUrl}/gameover.html?mode=${gameDifficulty}`);
    }

    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset.number;
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    takingAnswers = true;

};