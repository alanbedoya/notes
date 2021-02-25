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

//ES6 Destructuring
/*
var obj = {first: 'Alan', last: 'Bedoya'}
var first = obj.first;
var last = obj.last;

const {first, last} = {first: 'Alan', last: 'Bedoya};
*/


//Exercise 2 (Destructuring)
{"name": "Rusty", "room":"kitchen", "weapon":"candlestick"};

const {name, room, weapon} = {name: 'Rusty', room: 'kitchen', weapon: 'candlestick'};
