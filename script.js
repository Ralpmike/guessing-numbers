'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

const check = document.querySelector('.check');

let chances = document.querySelector('.score');
let message = document.querySelector('.message');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const playAgain = document.querySelector('.again');
const guessCount = document.querySelector('.guessCount');

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess > 20 || guess < 1) {
    // message.textContent = '⛔ Number out of range!';
    displayMessage;
    score--;
    chances.textContent = score;
  } else if (guess !== randomNumber) {
    if (score > 1) {
      // message.textContent =
      //   guess < randomNumber ? '📉 Too low!' : '📈 Too high!';
      displayMessage(guess < randomNumber ? '📉 Too low!' : '📈 Too high!');
      score--;
      chances.textContent = score;
    } else {
      message.textContent = '💥Game over!';
      chances.textContent = 0;
      // check.disabled = true;
    }
  }

  // else if (guess > randomNumber) {
  //   if (score > 1) {
  //     message.textContent = '📈 Too high!';
  //     score--;
  //     chances.textContent = score;
  //   } else {
  //     message.textContent = '💥Game over!';
  //     chances.textContent = 0;
  //     // check.disabled = true;
  //   }
  // } else if (guess < randomNumber) {
  //   if (score > 1) {
  //     message.textContent = '📉 Too low!';
  //     score--;
  //     chances.textContent = score;
  //   } else {
  //     message.textContent = '💥Game over!';
  //     chances.textContent = 0;
  //   }
  // }
  //? when the guess is correct
  else if (guess === randomNumber) {
    message.textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // lastResult.textContent = `🎉 Correct number! ${randomNumber}`;
    // lowOrHi.textContent = '';
    // check.disabled = true;
  }
});

playAgain.addEventListener('click', function () {
  score = 20;
  chances.textContent = score;
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  check.disabled = false;
  document.querySelector('.guess').value = '';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').focus();
  // document.querySelector('.number').textContent = randomNumber;
});
