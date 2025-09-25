'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Message Update based on game play
function message(message) {
  document.querySelector('.message').textContent = message;
}

// Win Theme change
function correctNumberDisplayStyle(width, backgroundColor, fontSize) {
  document.querySelector('.number').style.width = width;
  document.querySelector('body').style.backgroundColor = backgroundColor;
  document.querySelector('.number').style.fontSize = fontSize;
}

// Score update
function scoreUpdate(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', () => {
  let guess = parseInt(document.querySelector('.guess').value);

  // When no inputs
  if (!guess) {
    message('No number⛔');
  }
  // When guess equal to randomNumber
  else if (guess === randomNumber) {
    message('Correct Number!🎉');
    correctNumberDisplayStyle('30rem', '#60b347', '8rem');
    document.querySelector('.number').textContent = randomNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess not equal to randomnumber
  else if (guess !== randomNumber) {
    if (score > 1) {
      message(guess > randomNumber ? 'Too High📈' : 'Too Low📉');
      score--;
      scoreUpdate(score);
    } else {
      message('You lost the game!💥');
      scoreUpdate(0);
    }
  }
});

// Again Button EventListener
document.querySelector('.again').addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  message('Start guessing...');
  correctNumberDisplayStyle('15rem', '#222', '6rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  scoreUpdate(score);
});
