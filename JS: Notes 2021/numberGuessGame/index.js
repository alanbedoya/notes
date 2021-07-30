//Selecting and Manipulating Elements
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let randomNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);
  //If player has no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    //if player wins
  } else if (guess === randomNum) {
    document.querySelector('.message').textContent = 'Corret Number!';
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //If Guess is too high
  } else if (guess > randomNum) {
    if (score > 2) {
      document.querySelector('.message').textContent = 'Guess is too high!';
      score -= 2;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
    //If Guess is too low
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

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
