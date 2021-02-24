//Exercise 1
/* Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue. */
let game = {};
game.name = [];
game.name[0] = 'Miss Sarlet';

game.murderer = '??';
game['weapons'] = [
  { type: 'laser', location: 'lab' },
  { type: 'knife', location: 'kitchen' },
  { type: 'angry cats', location: 'bedroom' },
  { type: 'posion', location: 'kitchen' },
];

console.log(game);
