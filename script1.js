'use strict';

// document.querySelector('.message').textContent = 'You have started guessing...';

// create secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;
// creating functionality of check

// log the guess value to  console when given
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high...';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low...';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'You guessed it right!🎉';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    // highscore
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});

// again button functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});
