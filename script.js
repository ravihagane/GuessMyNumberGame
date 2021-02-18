'use strict';

/*
console.log(document.querySelector('.message').textContent);
displayMessage() 'winner';
const mess = document.querySelector('.message').textContent;
console.log(mess);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let randnum = Math.ceil(Math.random() * 20);

let score = 20;

const scoredsiplay = document.querySelector('.score').textContent;
const checkbtn = document.querySelector('.check');
const againbtn = document.querySelector('.again');
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkbtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Enter Number between 1-20');
  }
  if (guess < 0) {
    displayMessage('Enter Number between 1-20');
  }
  if (guess >= 1 && guess <= 20) {
    if (guess == randnum) {
      if (score >= 0) {
        displayMessage('🏆 Correct Number');
        document.body.style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = randnum;
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
      } else {
        displayMessage('💥 You Lost The game');
      }
    } else if (guess < randnum / 4) {
      if (score >= 0) {
        displayMessage('⏬ Your Guess is Too low');

        document.body.style.backgroundColor = 'rgb(134, 21, 21)';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You Lost The game');
      }
    } else if (guess < randnum / 2 && guess > randnum / 4) {
      if (score > 0) {
        displayMessage('📉 Your Guess is "low"');

        document.body.style.backgroundColor = 'rgb(156, 90, 14)';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You Lost The game');
      }
    } else if (guess < randnum && guess > randnum / 2) {
      if (score > 0) {
        displayMessage('🎃 You are Almost there!');

        document.body.style.backgroundColor = 'rgb(145, 175, 12)';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You Lost The game');
      }
    } else if (guess > randnum) {
      if (score >= 0) {
        displayMessage('📈 Your guess is High ');

        document.body.style.backgroundColor = 'rgb(95, 6, 6)';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You Lost The game');
      }
    }
  } else {
    displayMessage();
    ('Enter Number between 1-20');
  }
});

againbtn.addEventListener('click', () => {
  score = 20;
  randnum = Math.ceil(Math.random() * 20);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.body.style.backgroundColor = '#222';
});
