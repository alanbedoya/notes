//Exercise 1
/* Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue. */
// let game = {};
// game.name = [];
// game.name[0] = 'Miss Sarlet';

// game.murderer = '??';
// game['weapons'] = [
//   { type: 'laser', location: 'lab' },
//   { type: 'knife', location: 'kitchen' },
//   { type: 'angry cats', location: 'bedroom' },
//   { type: 'posion', location: 'kitchen' },
// ];

// console.log(game);

//ES6 Destructuring
/*
var obj = {first: 'Alan', last: 'Bedoya'}
var first = obj.first;
var last = obj.last;

const {first, last} = {first: 'Alan', last: 'Bedoya};
*/

//Exercise 2 (Destructuring)
// {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"};

// const obj = ({ person, room, weapon } = {
//   person: 'Rusty',
//   room: 'kitchen',
//   weapon: 'candlestick',
// });

// console.log(obj);

//List Transforms
//Exercise 3-1
//Loop through the suspects array
// const game = {
//   suspects: [
//     {
//       name: 'Alan',
//       color: 'Teal',
//     },
//     {
//       name: 'Emily',
//       color: 'Purple',
//     },
//   ],
// };

// function foo() {
//   for (let i = 0; i < game.suspects.length; i++) {
//     console.log(game.suspects[i]);
//   }
// }

// foo();

//Exercise 3-2
//Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty.
// let game = {
//   suspects: [
//     {
//       name: 'Rusty',
//       color: 'orange',
//     },
//     {
//       name: 'Miss Scarlet',
//       color: 'red',
//     },
//   ],
// };

// let gameLoop = function () {
//   for (let i = 0; i < game.suspects.length; i++) {
//     for (let key in game.suspects[i]) {
//       if (game.suspects[i][key] === 'Miss Scarlet') {
//         console.log("Got 'em!");
//       } else {
//         console.log('Keep searching.');
//       }
//     }
//   }
// };

// gameLoop();

//Exercise 3-3
//Destructure this nested data structure into two variables with the strings 'red' and 'orange'.
var suspects = [
  {
    name: 'Rusty',
    color: 'orange',
  },
  {
    name: 'Miss Scarlet',
    color: 'red',
  },
];

let [color, color2] = [suspects[0].color, suspects[1].color];
console.log(color, color2);
