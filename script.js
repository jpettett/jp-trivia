//SILVER-ish//

//Psuedo Code//
//click 'get started' initializes game
//question one is placed in div and time function counts down
//question box should display question plus 4 answers to select from
//correct answer signals correct and next question is displayed
//once score reaches 5 and next question is clicked JP gif is displayed and the game is over
//'play again?' button is displayed

//target score container
//target get started button
//reset button//
const score = document.querySelector('.score');
const getStarted = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset');
//const correct = document.querySelectorAll('span.correct-span');

//add event listener
resetButton.addEventListener('click', resetGame);
getStarted.addEventListener('click', hide);
getStarted.addEventListener('click', show);
getStarted.addEventListener('click', questionOneInit);
getStarted.addEventListener('click', startInterval);

//hide GET STARTED div//
function hide() {
  let hidden = document.querySelector('.container');
  hidden.style.display = 'none';
}
//show container for questions//
function show() {
  let show = document.querySelector('.container-two');
  show.style.display = 'block';
}

//callback logic for start game && QUESTION ONE//
function questionOneInit() {
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct');
  correctAnswer.addEventListener('click', addPoint);
  correctAnswer.addEventListener('click', revealCorrect);
  //CORRECT ANSWER//
  function revealCorrect() {
    let correct = document.querySelector('.correct-span');
    correct.style.display = 'block';
  }

  //NEXT QUESTION BUTTON
  let nextButton = document.createElement('button');
  nextButton.innerText = 'Next Question';
  document.querySelector('.container-two').appendChild(nextButton);
  nextButton.addEventListener('click', hide);
  nextButton.addEventListener('click', show);
  nextButton.addEventListener('click', questionTwoInit);
  function hide() {
    let hidden = document.querySelector('.container-two');
    hidden.style.display = 'none';
  }
  function show() {
    let show = document.querySelector('.container-three');
    show.style.display = 'block';
  }
}

//QUESTION 2//
function questionTwoInit() {
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct-two');
  correctAnswer.addEventListener('click', addPoint);
  correctAnswer.addEventListener('click', revealCorrect);
  //CORRECT ANSWER//
  function revealCorrect() {
    let correct = document.querySelector('.correct-span-two');
    correct.style.display = 'block';
  }
  //NEXT QUESTION BUTTON
  let nextButton = document.createElement('button');
  nextButton.innerText = 'Next Question';
  document.querySelector('.container-three').appendChild(nextButton);
  nextButton.addEventListener('click', hide);
  nextButton.addEventListener('click', show);
  nextButton.addEventListener('click', questionThreeInit);
  function hide() {
    let hidden = document.querySelector('.container-three');
    hidden.style.display = 'none';
  }
  function show() {
    let show = document.querySelector('.container-four');
    show.style.display = 'block';
  }
}

//QUESTION 3//
function questionThreeInit() {
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct-three');
  correctAnswer.addEventListener('click', addPoint);
  correctAnswer.addEventListener('click', revealCorrect);
  function revealCorrect() {
    let correct = document.querySelector('.correct-span-three');
    correct.style.display = 'block';
  }
  //NEXT QUESTION BUTTON
  let nextButton = document.createElement('button');
  nextButton.innerText = 'Next Question';
  document.querySelector('.container-four').appendChild(nextButton);
  nextButton.addEventListener('click', hide);
  nextButton.addEventListener('click', show);
  nextButton.addEventListener('click', questionFourInit);
  function hide() {
    let hidden = document.querySelector('.container-four');
    hidden.style.display = 'none';
  }
  function show() {
    let show = document.querySelector('.container-five');
    show.style.display = 'block';
  }
}

//QUESTION 4//
function questionFourInit() {
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct-four');
  correctAnswer.addEventListener('click', addPoint);
  correctAnswer.addEventListener('click', revealCorrect);
  function revealCorrect() {
    let correct = document.querySelector('.correct-span-four');
    correct.style.display = 'block';
  }

  //NEXT QUESTION BUTTON
  let nextButton = document.createElement('button');
  nextButton.innerText = 'Next Question';
  document.querySelector('.container-five').appendChild(nextButton);
  nextButton.addEventListener('click', hide);
  nextButton.addEventListener('click', show);
  nextButton.addEventListener('click', questionFiveInit);
  function hide() {
    let hidden = document.querySelector('.container-five');
    hidden.style.display = 'none';
  }
  function show() {
    let show = document.querySelector('.container-six');
    show.style.display = 'block';
  }
}

//QUESTION 5//
function questionFiveInit() {
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct-five');
  correctAnswer.addEventListener('click', addPoint);
  correctAnswer.addEventListener('click', revealCorrect);
  function revealCorrect() {
    let correct = document.querySelector('.correct-span-five');
    correct.style.display = 'block';
  }
  //NEXT QUESTION BUTTON
  let nextButton = document.createElement('button');
  nextButton.innerText = 'Next';
  document.querySelector('.container-six').appendChild(nextButton);
  nextButton.addEventListener('click', hide);
  nextButton.addEventListener('click', show);
  nextButton.addEventListener('click', winScreenInit);
  //stop countdown//
  nextButton.addEventListener('click', stopCountDown);
  function hide() {
    let hidden = document.querySelector('.container-six');
    hidden.style.display = 'none';
  }
  function show() {
    let show = document.querySelector('.container-seven');
    show.style.display = 'block';
  }
}

//TIMER FUNCTION ADAPTED FROM W3SCHOOLS//
let timeLeft = 30;
let timerFunction;
function startInterval() {
  timerFunction = setInterval(function() {
    document.querySelector('.time').innerHTML = timeLeft;
    timeLeft -= 1;
    if (timeLeft === -2) {
      clearInterval(timerFunction);
      //reload on OK click//
      alert('Looks like you ran out of time! Try again?')
        ? ''
        : location.reload();
    }
  }, 1000);
}
//STOP CLOCK ON WIN SCREEN//
function stopCountDown() {
  clearInterval(timerFunction);
}
//ADD POINT FUNCTION//
function addPoint() {
  let currentScore = parseInt(score.innerText);
  let newScore = currentScore + 1;
  score.innerText = newScore;
  //alert('correct!');
}

//WIN SCREEN LOGIC//
function winScreenInit() {
  if (score.innerText === '5') {
    document.body.classList.add('winner');
  }
}

//RESET GAME//
function resetGame() {
  location.reload();
}

//score clicker Dennis //
let scoreClick = document.querySelector('.score-title');
scoreClick.addEventListener('click', addPoints);
function addPoints() {
  let currentScore = parseInt(score.innerText);
  let newScore = currentScore + 1;
  score.innerText = newScore;
  if (score.innerText === '10') {
    document.body.classList.add('cheat');
  }
}

//WRONG ANSWER ALERT//
let wrongAnswer = document.getElementsByClassName('incorrect');
for (let i = 0; i < wrongAnswer.length; i++) {
  wrongAnswer[i].addEventListener('click', wrongAnswerAlert);
  function wrongAnswerAlert() {
    alert('Incorrect! Try again');
  }
}
