# The Random Music Quiz

![screenshot of site on different devices](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/responsive.png)

# Project Description

“The most random music quiz” (henceforth to be shortened to “TMRMQ”) is a quiz app in which the player answers 10 randomized questions within 3 difficulty levels & can then save their high score to a specific page that can be viewed at their leisure. The question and answer data is pulled from the “Open Trivia Database” API and fed into the app using Javascript. The name stems from the questions being wide ranging and varied within the music world.

Below is a live link to the site which is hosted on GitHub Pages.
[HERE](https://louparker.github.io/random-music-quiz/index.html)

## Table Of Contents

1. [Project Goals](#project-goals)
2. [Target Audience](#target-audience)
3. [UX Design](#ux-design)
    - [Strategy](#strategy)
    - [Owner Stories](#owner-stories)
    - [User Stories](#user-stories)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Balsamiq Wireframes](#balsamiq-wireframes)
    - [Surface](#surface)
4. [Design Choices](#design-choices)
    - [Font](#font)
    - [Color](#color)
    - [XD Mock-Ups](#xd-mock-ups)
    - [Design Wrap-Up](#design-wrap-up)
5. [Features](#features)
6. [Features Left To Implement](#features-left-to-implement)
7. [Technologies Used](#technologies-used)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Credits](#credits)

-----

## Project Goals

The aims of this web app are as follows:
-	Showcase JS development skills
-	Add to variety of projects in portfolio
-	Compound knowledge of HTML and CSS.
-	Provide the player with a realistic experience that looks and functions like a game.

-----

## Target Audience

-	A person interested in quiz trivia
-	A person interested in music
-	A peer interested in owners portfolio
-	A potential freelance client
-	Friends and family wanting to show off owners development skills.

-----

## UX Design

### Strategy

The aim of the project is to achieve a web app that provides value as a fun and interactive experience to all users, with a focus on ease of use, smooth functionality a unique look. When considering the target audience, the following owner and user stories were compiled.

### Owner Stories


-	As the site owner, I want to provide rich interactive experience to anyone that tries the game enough to make them want to play more.
-	As the site owner, I want to demonstrate new skills within JS & offer evidence of current skill level in HTML and CSS.
-	As the site owner, I want all elements of the game to function properly to provide full immersion.

### User Stories

-	As a site user, I want to make sure all elements of the game work well, to confirm the owners JS skills.
-	As a site user, I want to feel immersed in the game and not worry about lagging or errors.
-	As a site user, I want to get some sort of feedback when answering questions correct or incorrect.
-	As a site user, I want to have a clear view of my score and how much time is left for each question.
-	As a site user, I want to be able to understand the rules easily and not have to go back to read them.
-	As a site user, I want all buttons to be sematic so I don’t have to press anything to “see what it does”.
-	As a site user, I want to be able to check my high-scores whenever I want.
-	As a site user, I want to be able to exit the game when playing for whatever reason
-	As a site user, I want to be able to choose a harder difficulty level to be top on all the high-score leaderboards
-	As a site user, I want the whole app to be easy to grasp so it is easy to show off.

### Scope

Based on the user stories and project aims, it was decided that the following features be included in the app:
-	Questions and answers being pulled from an API.
-	A home page offering quiz pages with 3 different levels.
-	A high scores page for viewing top 5 high-scores of each level.
-	An exit button on the game page to quit/restart.
-	A game-over page showing final score and offering ability to save score, play again or go to the home page.
-	Animated feedback for correct or incorrect answers.

The project was then split into sprints to ensure an even workload spread over time.
-	Sprint 1 – HTML & CSS markup
-	Sprint 2 – JavaScript Logic & functionality
-	Sprint 3 – Testing & Debugging

### Structure

From having played various quiz games, there was a general idea of how I wanted the app and each page to be structured. The following was used to solidify these ideas and create the final structure.
-	Interaction design – Having a consistent theme of readable content (rules or questions) in the top/middle portions of the screen and actionable content (buttons) in the lower portion of the page. This provides a consistent interaction pattern which is quickly and easily assimilated.
-	Information Design – The content is also arranged in a way to make the priority information visible and accessible first followed by actionable content. This ensures users of the site view the necessary content before seeing content that is clickable.

### Skeleton

At this point, wireframes were created to have a visible reference point for the structure. I wanted to ensure there was enough simplicity, intuitive design and good UI design.

### Balsamiq Wireframes

#### HOME PAGE

- [Desktop](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/desktop/balsamiq/desk-bal-home.png)
- [Tablet](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/tablet/balsamiq/tab-bal-home.png)
- [Mobile](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/mobile/balsamiq/index.png)

The structure of this page as the home page is shared by most other pages in the web app. Actionable buttons on the lower half and information that needs to be taken in in the upper half of the page. Also due to the mobile first design ethos, the information is displayed in order of priority, top down. This concept will also continue throughout the web app.

#### GAME PAGE

- [Desktop](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/desktop/balsamiq/desk-bal-game.png)
- [Tablet](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/tablet/balsamiq/tab-bal-game.png)
- [Mobile](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/mobile/balsamiq/game.png)

This page starts with a Heads up display (HUD) which is familiar in most games, it is where all information to do with the ongoing status of the game is displayed. For this game specifically, score, time left and an exit button are included in the HUD. This is then followed by the question in the middle of the page, this is a good spot considering the priority of the current question, it is one of the first places the eyes will look. After this, there are the answer option buttons.

#### GAMEOVER PAGE

- [Desktop](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/desktop/balsamiq/desk-bal-gameover.png)
- [Tablet](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/tablet/balsamiq/tab-bal-gameover.png)
- [Mobile](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/mobile/balsamiq/gameover.png)

This page continues the simple information followed by actionable content concept. The score here is the priority content so it is placed in the middle followed by the actionable input and buttons.

#### HIGHSCORES PAGE

- [Desktop](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/desktop/balsamiq/desk-bal-highscores.png)
- [Tablet](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/tablet/balsamiq/tab-bal-highscores.png)
- [Mobile](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/mobile/balsamiq/highscores.png)

This page is purely information based with one button at the bottom of the page to go back home. The highscores for each level are shown from easy to hard in a descending order.

### Surface

The final look of the web app as a whole was decided at this point. Colors, typography, animations and other design elements were considered with all decisions based on the requirement that they reinforce the meaning or value of the content.

## Design Choices

### Font

I wanted the font to be something unusual, informal and unique. It needed to be easy to read but still enforce the “random” concept of the game. Font is chosen is “Londrina Solid”. The creator of the font cites its origins as from the streets of Sao Paulo, Brazil with the concept of urban confusion. The font also works well in both small/large font sizes and thick/thin font weights. This lends to the useability and scalability of the font and site as a whole.

### Color

The colors for this web app needed to be quite bold and convey differing messages. Answer choices each have their own color, priority info (question, score & HUD) all have the same color background. There is was also a need to have good contrast for all elements which the chosen colors do provide.

![screenshot of color palette](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/palette.png)

### XD Mock-Ups

#### HOME PAGE

- [Desktop](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/desktop/xd/desk-xd-home.png)
- [Tablet](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/tablet/xd/tab-xd-home.png)
- [Mobile](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/mobile/xd/index%20xd.png)

In final version, the following changes were made:
- Colors were darkened to increase contrast for accessibility.
- Dividing horizontal lines were added between rules to increase visual separation.
- Highscores button was added underneath game buttons.

#### GAME PAGE

- [Desktop](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/desktop/xd/desk-xd-game.png)
- [Tablet](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/tablet/xd/tab-xd-game.png)
- [Mobile](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/mobile/xd/game%20xd.png)

In final version, the following changes were made:
- Colors were darkened to increase contrast for accessibility.
- Colors were adjusted to improve overall look of game.
- Timer was added to HUD.
- Button containers change depending on viewport size.

#### GAMEOVER PAGE

- [Desktop](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/desktop/xd/desk-xd-gameover.png)
- [Tablet](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/tablet/xd/tab-xd-gameover.png)
- [Mobile](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/mobile/xd/gameover%20xd.png)

In final version, the following changes were made:
- name input box was added.
- Button containers adjusted in size.
- Heading title color darkened.

#### HIGHSCORES PAGE

- [Desktop](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/desktop/xd/desk-xd-highscores.png)
- [Tablet](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/tablet/xd/tab-xd-highscores.png)
- [Mobile](https://github.com/louparker/random-music-quiz/blob/main/assets/images/readme%20images/wireframes/mobile/xd/highscores%20xd.png)

In final version, the following changes were made:
- Further high score container boxes were added for respective levels.
- Heading title color darkened.

### Design Wrap-Up

I wanted the site to provide quite simple but fresh feeling to the user. The design makes it easy to quickly understand and remember the game flow. The colors give meaning to elements and animations especially on the game page give direct feedback within the flow of the game.

-----

## Features

### Level Select on homepage

Within the home page, the user has the ability to choose a difficulty level. This was done to increase the accessibility of the game but also to increase the playability and keep people coming back to play more.

### Animations on home page buttons

The buttons on the homepage have a bouncing animation when hovering over them. This was done to increase the interactivity of the home page and give feedback that these buttons are actionable. Buttons on the gameover page also have the same bouncing animation for consistency.

### Exit button on game page

This button is important as it gives players an easy way to either restart or completely quit the game. It redirects players to the homepage. It also has a scale down animation when hovered over and the cursor changes to a pointer which both indicate that something happens then this is clicked.

### Timer on game page

The timer is an important game feature which adds pressure to the players game experience. It is restarted whenever a question is answered or when it reaches zero.

### Score counter on game page

The score counter is another important game feature which lets the player know their current score at all times. The points scored is different for each difficulty, so this allows the player to also see that difference while playing.

### Heads Up Display (HUD) on game page

The HUD as a whole is an important aspect of nearly all games. All relevant information for the player is stored there so it was important that the elements that make up the HUD were displayed with clarity and in a way that made sense for the gamer.

### Animations on game page

The animations on the game page serve to let the player know if their chosen answer is correct or incorrect. The correct twisting animation along with the color change to green is intended to give a sense of victory and translate into “that’s correct” without using words. The incorrect squeezing animation with the color change to red indicates the opposite, “that is incorrect”.

### Save score on game-over page

The save button on the game-over page allows the player to save their score in local storage. If it is amongst the top 5 scores for each level then it will be displayed on the high scores page.

### Max Length on Gameover Page Input

The input element has a maxlength attribute of 10 characters to make sure the highscores containers keep a tidy look and that long names do not take up more than one line.

### High-scores Page

The high scores page allows the players to see where they rank amongst other players in terms of scoring for each difficulty level. The page is accessible from the homepage.


-----

## Features Left To Implement

-	Bonus points based on time left.
-	Modal if score wasn’t high enough for high scores page or to say it is there.
-   Work more with reusability in Javascript code.

-----

## Technologies Used

- VSCode (+ extensions) – Code editor of choice.
- Bootstrap – For layout purposes.
- Google Fonts – Font choice.
- tobiasahlin.com – Loading animation code.
- Open Trivia Database – API for quiz data.
- animista.net – Animations.
- Hover.css – Animations.
- GitHub Pages – Deployment.
- Tinypng.com - Image compression.

-----

## Testing

Testing documentation can be found [HERE](testing.md)

-----

## Deployment

The site was developed in my own environment, I used VSCode as my code editor of choice & regularly used Git through a VSCode extension to commit and push changes to the project. I decided to use VSCode over Gitpod (as I have used in previous projects and as is recommended by Code Institute) since I am quite comfortable with using it and the Git extension made it very easy to incorporate version control and regular commits into my workflow. It is also a very qidely used professional IDE which encourages me to spend as much time with it as I can now while I am still learning. The steps to deploy the project onto GitHub Pages from its GitHub repository are listed below.

1. Log in to GitHub.
2. Select louparker/random-music-quiz from the list of repositories to the left of the screen.
3. Once in the repository, press the settings button from the menu list toward the top of the page (if using a smaller device, press the 3 dots button or scroll through the menu until you see it).
4. Scroll down to the GitHub Pages section.
5. In the "Source" mini section, press the drop down selector which says none, from the list it opens up, select master/main.
6. The page will then refresh give you a clickable link (back in the GitHub Pages section) to your newly deployed site (the site can take up to 60 seconds to go live).

### Run Project Locally

These are the steps to take to work on the code in a local development environment. These steps are specific to VSCode but steps for other IDE's will be included too.

1. Click on this link to be taken to the repository main page: [HERE](https://github.com/louparker/random-music-quiz).
2. Press the code button.
3. Copy the given link to your clipboard.
4. (For VSCode Users) Open VSCode, press command, shift, p (command, control, p for windows users) to open the command palette. Type clone and press enter, then paste the URL from the GitHub repository. The repository will now be cloned into your local environment and can be edited.
4. (For General Use) Open your local IDE of choice, open the terminal and navigate to the directory you wish the repository to be cloned to. Once in the chosen directory, type `git clone`, then paste the URL from the GitHub repository. It should look like this:

`git clone https://github.com/louparker/random-music-quiz.git`

5. Press enter, you should now have a local version of the repository successfully cloned.

If you would like to use Gitpod as a development environment, you can follow these steps to clone the repository (It is recommended to use Chrome browser when using GitPod so these steps assumes you have it installed.):

1. Create a GitHub account, if you do not already have one.
2. Search for the [Gitpod Browser extenstion](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki?hl=en) within the Chrome extentions store.
3. Install the extension and restart the browser.
4. Log in to Gitpod with your GitHub account information.
5. Click on this link to be taken to the repository main page: [HERE](https://github.com/louparker/random-music-quiz).
6. Click on the Gitpod button and this will create a new Gitpod workspace which can be edited locally.

### Forking

The steps below indicate how you can "fork" the project without effecting the main branch. This means you can edit it as a repository on your own GitHub profile.

1. Log in to GitHub with your user credentials.
2. Click on this link to be taken to this repository's main page: [HERE](https://github.com/louparker/random-music-quiz).
3. To the right of the repository name, you see a "fork" button, press it.
4. You now have a copy of this repository on your personal GitHub account.
5. When you are happy with contributions of edits, you can press the "new pull request" button which allows the repository owner to include your work in the original project.

-----

## Credits

### Content
All design, content and code (unless specified below) was created by myself.

Specified code usage includes:
- [James Q Quick tutorial to build a quiz app](https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript). Javascript code excerpts and concepts were taken from this tutorial.
- [Emmet HTML boilerplate](https://docs.emmet.io/cheat-sheet/)
- [Bootstrap layout components](https://getbootstrap.com/docs/4.5/layout/overview/)
- [Tobias Ahlin Loading Animation](https://tobiasahlin.com/spinkit/). Used as loading screen between index and game pages.
- [Google Fonts CSS import code](https://fonts.google.com/specimen/Londrina+Solid?category=Display&preview.text=THE%20MOST%20RANDOM%20MUSIC%20QUIZ&preview.text_type=custom&sidebar.open=true&selection.family=Londrina+Solid:wght@100;300;400;900#standard-styles)
- [Tonny Garic Countdown Timer](https://jsfiddle.net/TonnyGaric/csj2b17L/). Used is game.js to create a functioning game timer.
- [Open Trivia Database](https://opentdb.com/api_config.php). Used API for game question and answer data.
- [Animista Animations](https://animista.net/play/basic/). Used at various points within project.
- [Hover.css effects](https://ianlunn.github.io/Hover/). Used for hover effects at various points within project.

The following sites were used for beautifying, optimizing images and adding correct vendor prefixes to my code:
- [Autoprefixer CSS](https://autoprefixer.github.io/)
- [Code Beautify](https://codebeautify.org/)
- [TinyPNG](https://tinypng.com/)


### Acknowledgements

- Stack Overflow was a constant help throughout the development of this project as evidenced by this quite helpful answer when trying to [fix a bug](https://stackoverflow.com/questions/65383311/html-javascript-slow-crashing-on-quiz-app).
- Special thanks to my mentor Maranatha for regular words of wisdom and helping guide me to the right conclusions.
