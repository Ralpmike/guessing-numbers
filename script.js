'use strict';

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resetButton = document.querySelector('.reset');
const guessCount = document.querySelector('.guessCount');
