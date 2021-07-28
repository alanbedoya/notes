//Selecting and Manipulating Elements
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const randomNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNum;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === randomNum) {
    document.querySelector('.message').textContent = 'Corret Number!';
  } else if (guess > randomNum) {
    if (score > 2) {
      document.querySelector('.message').textContent = 'Guess is too high!';
      score -= 2;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < randomNum) {
    if (score > 2) {
      document.querySelector('.message').textContent = 'Guess is too low!';
      score -= 2;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});
