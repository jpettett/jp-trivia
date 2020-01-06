//MVP//

//target radio buttons
let submitButtonOne = document.querySelector('.submit-button-one');
let submitButtonTwo = document.querySelector('.submit-button-two');
let submitButtonThree = document.querySelector('.submit-button-three');
let submitButtonFour = document.querySelector('.submit-button-four');
let submitButtonFive = document.querySelector('.submit-button-five');

//target score container
const score = document.querySelector('.score');

//submit button event listener
submitButtonOne.addEventListener('click', onSubmit);
submitButtonTwo.addEventListener('click', onSubmit);
submitButtonThree.addEventListener('click', onSubmit);
submitButtonFour.addEventListener('click', onSubmit);
submitButtonFive.addEventListener('click', onSubmit);

//submit button function//
function onSubmit() {
  let currentScore = parseInt(score.innerText);
  let newScore = currentScore + 1;
  if (document.querySelector('input[value="correct"]:checked').value) {
    score.innerText = newScore;
  } else if (document.querySelector('input[value="wrong"]:checked').value) {
    alert('try again!');
  }
  if (score.innerText === '5') {
    document.body.classList.add('winner');
  }
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
