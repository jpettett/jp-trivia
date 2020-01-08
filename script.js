//SILVER//

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

//callback logic for start game && question one//
function questionOneInit() {
  // let questionOne = document.createElement('p');
  // questionOne.innerText = 'What actor plays Ian Malcom?';
  // document.querySelector('.container-two').appendChild(questionOne);
  //answers array or object//
  // let answers = {
  //   names: ['Jeff Goldblum', 'Nicholas Cage', 'Ryan Gosling', 'Brian Cranston'],
  //   correct: 'Jeff Goldblum'
  // };
  //CREATE <P> TAGS WITH NAMES//
  // for (let i = 0; i < 4; i++) {
  //   let answerParagraph = document.createElement('p');
  //   answerParagraph.setAttribute('class', 'correct');
  //   answerParagraph.innerText = answers.names[i];
  //   document.querySelector('.para').appendChild(answerParagraph);
  // }
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct');
  correctAnswer.addEventListener('click', addPoint);
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
  // let questionOne = document.createElement('p');
  // questionOne.innerText = 'Who directed Jurassic Park?';
  // document.querySelector('.container-three').appendChild(questionOne);
  // //answers array//
  // let answers = [
  //   'Steven Spielberg',
  //   'Martin Scorsese',
  //   'George Lucas',
  //   'James Cameron'
  // ];
  // //FOR LOOP TEST//
  // for (let i = 0; i < 4; i++) {
  //   let answerPara = document.createElement('p');
  //   answerPara.setAttribute('class', 'yes');
  //   answerPara.innerText = answers[i];
  //   document.querySelector('.container-three').appendChild(answerPara);
  // }
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct-two');
  correctAnswer.addEventListener('click', addPoint);
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
  // let questionOne = document.createElement('p');
  // questionOne.innerText = 'What fictional island is Jurassic Park set on?';
  // document.querySelector('.container-four').appendChild(questionOne);
  // //answers array//
  // let answers = ['Island Park', 'Isla Nubar', 'Costa Isla', 'Dino Island'];
  // //FOR LOOP TEST//
  // for (let i = 0; i < 4; i++) {
  //   let answerPara = document.createElement('p');
  //   answerPara.setAttribute('class', 'correct');
  //   answerPara.innerText = answers[i];
  //   document.querySelector('.container-four').appendChild(answerPara);
  // }
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct-three');
  correctAnswer.addEventListener('click', addPoint);
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
  // let questionOne = document.createElement('p');
  // questionOne.innerText = 'What stone contains "dino DNA"';
  // document.querySelector('.container-five').appendChild(questionOne);
  // //answers array//
  // let answers = ['Quartz', 'Amber', 'Diamonds', 'Opal'];
  // //FOR LOOP TEST//
  // for (let i = 0; i < 4; i++) {
  //   let answerPara = document.createElement('p');
  //   answerPara.setAttribute('class', 'correct');
  //   answerPara.innerText = answers[i];
  //   document.querySelector('.container-five').appendChild(answerPara);
  // }
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct-four');
  correctAnswer.addEventListener('click', addPoint);
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
  // let questionOne = document.createElement('p');
  // questionOne.innerText = "What is the name of John Hammond's lawyer?";
  // document.querySelector('.container-six').appendChild(questionOne);
  // //answers array//
  // let answers = ['Amos McFly', 'Kirk Geraldo', 'Mr. Howard', 'Donald Gennaro'];
  // //FOR LOOP TEST//
  // for (let i = 0; i < 4; i++) {
  //   let answerPara = document.createElement('p');
  //   answerPara.setAttribute('class', 'correct');
  //   answerPara.innerText = answers[i];
  //   document.querySelector('.container-six').appendChild(answerPara);
  // }
  //CORRECT ANSWER//
  let correctAnswer = document.getElementById('correct-five');
  correctAnswer.addEventListener('click', addPoint);
  //NEXT QUESTION BUTTON
  let nextButton = document.createElement('button');
  nextButton.innerText = 'How did you do?';
  document.querySelector('.container-six').appendChild(nextButton);
  nextButton.addEventListener('click', hide);
  nextButton.addEventListener('click', show);
  nextButton.addEventListener('click', winScreenInit);
  //stop countdown//
  nextButton.addEventListener('click', clearInterval(timerFunction));
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
  let timerFunction = setInterval(function() {
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
