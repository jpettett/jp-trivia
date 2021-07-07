# Project 1 Feedback

## Code Quality - Performing

Criteria: Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

### Strengths:

-   Code is well-formatted and linted.
-   In the JavaScript, there is good use of semantic variable names. I like how the code is organized, with global variables declared at the beginning and functions following.
-   Good use of comments in the JS as well to explain sections of code and make it more readable.

### Areas for Growth:

-   My biggest suggestion for next steps here would be to refactor your code to be DRY-er; 237 lines is a LOT of JavaScript for a trivia quiz. Focus on the question functions and next buttons to DRY up. The goal here is to have one function that initiates the next question, and one next button with the required functionality.
-   Reconsider some of your class names in HTML. You might not need individual functions to handle switching questions, for example, if you called all your container divs `question-container`, for instance. You could grab them as an array using `getElementsByClassName` and iterate over them in your function with either a `for` loop or an array method.
-   Remove any unused lines of code in the CSS (noticed some commented-out styles).

## Technical Requirements - Performing

Criteria: How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

### Strengths:

-   Project meets technical requirements in terms of loading in browser without errors, deployed to GitHub and a README for documentation.
-   Code shows good understanding of key concepts in HTML, CSS and JS. In JS, good use of DOM manipulation and functional programming to create interactivity and game logic. In CSS, good use of selecting multiple selectors and using pseudo-classes, as well as incorporating a custom Google font. The HTML makes good use of semantic tags.

### Areas for Growth:

-   Again, think about what we've learned about how to make code reusable to tighten up your JavaScript. Use reusable, generic functions instead of coding specifically for each question.
-   Having comments in the code that explain the purpose and functionality of the code is a good thing; however, I would remove the block of pseudo-code at the very top of your JS file. Move those comments to the actual parts of the code where that functionality is happening. Easier to read and more professional.

## Creativity and Interface - Performing

Criteria: Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

### Strengths:

-   Application is very easy to navigate, with clear calls to action and intuitive functionality.
-   Pleasant and refined UI and color scheme. The muted background image adds a nice touch.
-   The topic, concept, and some of the functionality (like the score Easter egg) are all very unified and evoke a nostalgia for old-school video games and the 90s in general. Also shows a sense of humor and playfulness that gives the app a more personal touch.

### Areas for Growth

-   You could further develop the "throwback" feel of the game by having a more 90s/Jurassic Park color scheme, as well as implementing customized fonts (try searching "Jurassic Park Fonts"). Also potentially think about other "old-school" game features to add!
-   There are some areas of the UI where there could be a little more finesse in design and styling, such as adding a bit more padding to the bottom of the "time" and "score" fields, having the "next question" hover be the same color as the "start" button, and spacing out each question more evenly in the container div (vertical alignment/centering).

## Functionality - Performing

Criteria: Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

### Strengths:

-   Application works as a fully developed trivia quiz. The application has a clear beginning, middle and end.
-   All features fully implemented, including a game reset (play again) button. Instead of forcing `location.reload()`, how else might you implement the play again functionality?
-   No errors observed in the game-play in either the browser or the console.
-   Nice use of a functional game timer, and smart to credit the source of inspiration.
-   Great ideas for future features to implement.

### Areas for Growth:

-   I would consider giving the user more time than 30 seconds to finish the game, or have the questions switch automatically after they've been answered. The first time I took the quiz, it was slightly stressful trying to finish it in time! :)
-   The first time I loaded your quiz, the background image took a while to load. With subsequent loads it was faster because the background image was cached in my browser. You might get a more performant app if you try hosting the image on a site like imgur and/or using a lower-resolution version of the image.
-   The user can click through the questions without answering. You might consider disabling the next button until the user has selected a response.
-   When the timer is up, consider using a modal instead of an alert to indicate time up and force the user out of the game. Alerts are rarely used in modern web development. (Alternatively, you could try to stylize the alert to resemble a 90s-era Windows popup to continue with the throwback theme.)

## Presentation - Progressing

Criteria: Is there adequate documentation? Is the repository well organized and free of clutter?

### Strengths:

-   There is a basic README in place with documentation that covers basic elements of the project, including an about section, technologies used, known issues, and future directions.
-   Repo is uncluttered with relatively frequent commits and descriptive commit messages.

### Areas for Growth:

-   The README needs further development. The README on your GitHub repo is the first point of contact between your code and potential employers. Having a descriptive, informative, and complete README will help introduce your project as well as YOU as a developer to your audience.
-   Remember to add details about your planning process, such as your wire-frames and user stories.
-   Familiarize yourself with Markdown formatting rules to stylize your README and make it look more professional.

## Hard Requirements - Complete:

-   [x] The project is deployed to GitHub Pages or a custom domain
-   [x] The application renders in the browser and runs without errors
-   [x] The repo has a README that adequately documents the project

## Grade: Pass
