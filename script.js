'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const check = document.querySelector('.check');
const randomNumberDisplay = (document.querySelector('.number').textContent =
  randomNumber);
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
    // score--;
    // chances.textContent = score;
  } else if (guess > randomNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      chances.textContent = score;
    } else {
      message.textContent = '💥Game over!';
      chances.textContent = 0;
      // check.disabled = true;
    }
  } else if (guess > 20 || guess < 1) {
    message.textContent = '⛔ Number out of range!';
    score--;
    chances.textContent = score;
  } else if (guess < randomNumber) {
    message.textContent = '📉 Too low!';
    score--;
    chances.textContent = score;
  } else if (guess === randomNumber) {
    message.textContent = '🎉 Correct number!';
    // lastResult.textContent = `🎉 Correct number! ${randomNumber}`;
    // lowOrHi.textContent = '';
    // check.disabled = true;
  }
  // if (score < 1) {
  //   message.textContent = '💥Game over!';
  //   chances.textContent = 0;
  //   check.disabled = true;
  // }
  // guessField.value = '';
  // guessField.focus();
  // guessCount.textContent = `Guess count: ${guess}`;
});

// playAgain.addEventListener('click', function () {
//   score = 20;
//   chances.textContent = score;
//   message.textContent = 'Start guessing...';
//   randomNumberDisplay.textContent = '?';
//   check.disabled = false;
//   guess.value = '';
//   guess.focus();
//   // lastResult.textContent = '';
//   // lowOrHi.textContent = '';
// });
