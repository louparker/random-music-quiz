# Testing

### Table Of Contents
1. [Code Validation](#code-validation)
2. [Automated Testing](#automated-testing)
3. [Responsiveness and Browser Compatibility](#responsiveness-and-browser-compatibility)
4. [User Story Testing](#user-story-testing)
5. [Peer Testing](#peer-testing)
6. [Bugs](#Bugs)

-----

Throughout the development of this project, various proactive testing was done. With HTML & CSS links were checked and syntax was dynamically corrected. With JavaScript, functions were console logged to check functionality and if the results were as expected. Once the project was near completion, another more thorough round of testing begun. This included:

-----

### Code Validation

#### W3C HTML Validator:
Markup passed through without any errors

INDEX.HTML
![screenshot of index page html validator](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/index%20html%20validator.png)

GAME.HTML
![screenshot of game page html validator](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/game%20html%20validator.png)

GAMEOVER.HTML
![screenshot of gameover page html validator](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/gameover%20html%20validator.png)

HIGHSCORES.HTML
![screenshot of highscores page html validator](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/highscores%20html%20validator.png)

#### Jigsaw CSS Validator
Code passed through without any errors. A warning regarding imported stylesheets was included but no action was taken toward this warning as the imported stylesheet is from a trusted & well known source. There was also a warning regarding webkit prefixes on some animations I used from a specific site. No immediate action was taken but a note was made to see if the specified prefixes are necessary or can be updated.

APP.CSS
![screenshot of index page css validator](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/app%20css%20validator.png)

GAME.CSS
![screenshot of game page css validator](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/game%20css%20validator.png)

GAMEOVER.CSS
![screenshot of gameover page css validator](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/gameover%20css%20validator.png)

HIGHSCORES.CSS
![screenshot of highscores page css validator](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/highscores%20css%20validator.png)

#### JSHint Javascript Code Quality Tool

GAME.JS
![screenshot of game jshint page](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/game%20-%20jshint.png)

GAMEOVER.JS
![screenshot of gameover jshint page](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/gameover%20-%20jshint.png)

- Two unused variables are being used iin another file (gameover.html).

HIGHSCORES.JS
![screenshot of highscores jshint page](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/validator%20testing/highscores%20-%20jshint.png)


-----

### Automated Testing

#### LightHouse

Scores on the lighthouse test were generally good, with notes to eliminate render-blocking resources. The Bootstrap files were often the culprit. Due to the otherwise good scores, no fixes were taken at the time.

HOME PAGE
![screenshot of index.html page](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/automated%20testing/homepage%20-%20lighthouse.png)

GAME PAGE
![screenshot of game.html page](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/automated%20testing/game-lighthouse.png)

GAMEOVER PAGE
![screenshot of gameover.html page](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/automated%20testing/gameover%20-%20lighthouse.png)

HIGHSCORES PAGE
![screenshot of highscores.html page](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/automated%20testing/highscores%20-%20lighthouse.png)

-----

### Responsiveness and Browser Compatibility

I tested the sites responsiveness at all viewports available on chrome's developer tools. Details also included in the table below.

The site's browser compatibility was also manually checked using [BrowserStack](https://www.browserstack.com/live). I tested the compatibility on Chrome v87, Firefox v84, Safari, Edge v87. Details included in the table below.

|Criterea             |Galaxy S10+|Moto G4   |Galaxy S5 |Pixel 2   |Pixel 2 XL|iPhone SE |iPhone 6/7/8|iPhone 6/7/8 Plus|iPhone X  |iPad      |iPad Pro  |Surface Duo|Galaxy Fold|Laptop (+1024px)|Laptop (+1440px)|
|---------------------|-----------|----------|----------|----------|----------|----------|------------|-----------------|----------|----------|----------|-----------|-----------|----------------|----------------|
|Renders As Expected? |PASS       |PASS      |PASS      |PASS      |PASS      |PASS      |PASS        |PASS             |PASS      |PASS      |PASS      |PASS       |PASS       |PASS            |PASS            |

-----

|Criteria              |Chrome v87     |Firefox v84    |Safari v14.0.2  |Edge v87       |
|----------------------|:-------------:|:-------------:|:--------------:|:-------------:|
|Renders As Expected?  |PASS           |PASS           |PASS            |PASS           |

-----

### User Story Testing

|User Story                                      |Screenshot                  |Result                                                                                                           |
|------------------------------------------------|----------------------------|-----------------------------------------------------------------------------------------------------------------|
|As the site owner, I want to provide rich <br/>interactive experience to anyone that tries the <br/>game enough to make them want to play more.|                            |Site owner is satisfied game provides a great overall experience.
|As the site owner, I want to demonstrate new <br/>skills within JS & offer evidence of current <br/> skill level in HTML and CSS.|                            |Site owner is pleased the game works smoothly with no major errors, showcasing current skill level adequately.
|As the site owner, I want all elements of the <br/>game to function properly to provide full <br/> immersion.|                            |Site owner is satisfied with functionality of all game elements, allowing for full immersion.
|As a site user, I want to make sure all elements <br/>of the game work well, to confirm the owners <br/> JS skills.|                            |Site user is satisfied with functionality of game, confirms site owners skills in JS.
|As a site user, I want to feel immersed in the <br/>game and not worry about lagging or errors.|                            |Site user is happy that they can play non-stop without any hiccups or errors in the game.
|As a site user, I want to get some sort of <br/>feedback when answering questions correct <br/>or incorrect.|[Correct-Animation] [Incorrect-Animation]  |Site user is pleased to see fun animation as feedback for scoring correct or incorrect.
|As a site user, I want to have a clear view <br/>of my score and how much time is left for <br/> each question.|[Heads-Up-Display]|Site user is satisfied with HUD and placement of it, easy to see all important information.
|As a site user, I want to be able to <br/>understand the rules easily and not have to <br/>go back to read them.|[Rules]|Site user can quickly understand the game rules and would not have to go back to double check anything.
|As a site user, I want all buttons to be <br/>sematic so I don’t have to press anything to <br/>“see what it does”.|[Semantic-Buttons]|Site user is satisfied that all buttons made sense & didn’t need to check what a specific button did.
|As a site user, I want to be able to check <br/>my high-scores whenever I want.|[Highscores-Page]|Site user was happy to be able to check high scores at any time, allowed for “replayability”.
|As a site user, I want to be able to exit <br/>the game when playing for whatever reason.|[Exit-Button]|Site user was pleased that they could quit the game and start over when necessary.
|As a site user, I want to be able to choose a <br/>harder difficulty level to be top on all the <br/> high-score leaderboards.|[Difficulty-Buttons]|Site user was happy to see different difficulty levels to allow for further playability & learning.
|As a site user, I want to be enticed to <br/>try the more difficult levels.|[Difficulty-Buttons]|Site user was pleased to learn that points are increased for higher difficulty levels.
|As a site user, I want the whole app to be <br/>easy to grasp so it is easy to show off.|                             |Site user was satisfied with the learning curve of the game, confident to show off & encourage others to play.

[Correct-Animation]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/correct%20animation.png
[Incorrect-Animation]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/incoreect%20animation.png
[Heads-Up-Display]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/HUD.png
[Rules]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/rules.png
[Semantic-Buttons]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/semantic%20buttons.png
[Highscores-Page]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/highscores.png
[Exit-Button]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/exit%20button.png
[Difficulty-Buttons]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/difficulty%20buttons.png
[Difficulty-Buttons]: https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/user%20story%20testing%20images/difficulty%20buttons.png

-----

### Peer Testing

|Feedback                                                                                 |Potential Solution                                                                             |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
|Questions can be so specific so difficulty is high even on easy level.                   |Use another quiz API or hard-code specific own question set or create own API.                 |
|Wanted some feedback on which answer was actually correct if incorrect answer was chosen.|Add a function to highlight correct answer in green while showing incorrect animation.         |

-----

### Bugs

|Bug Number |Test                                     |Result                                                  |Fix                                                                                        |
|-----------|-----------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------|
|001        |Redirection to page once game is finished|Unexpectedly redirected to 404 error page               |Use template literals and different location function (replace) to redirect to correct URL.|
|002        |Answer questions on game page            |Game eventually starts to slow down/crash               |Remove multiple usage of restartInterval function which was causing recursion issues.      |
|003        |Press play again button                  |Not redirected to respective difficulty level game page |Use template literals include correct difficulty level.                                    |
