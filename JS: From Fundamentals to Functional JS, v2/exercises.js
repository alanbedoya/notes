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
// var suspects = [
//   {
//     name: 'Rusty',
//     color: 'orange',
//   },
//   {
//     name: 'Miss Scarlet',
//     color: 'red',
//   },
// ];

// let [color, color2] = [suspects[0].color, suspects[1].color];
// console.log(color, color2);

//.forEach() Function
//Exercise 4
//Complete the rest of this function so that it works as described in the previous slides:
// function CreateSuspectObjects(name) {
//   return {
//     name: name,
//     color: name.split(' ')[1],
//     speak() {
//       log(`my name is ${name}`);
//     },
//   };
// }

// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// var suspectsList = [];
// for (var i = 0; i < suspects.length; i++) {
//   suspectsList.push(CreateSuspectObject(suspects[i]));
// }

// _.each = function (list, callback) {
//   //...TODO
//   if (Array.isArray(list)) {
//     for (var i = 0; i < list.length; i++) {
//       callback(list[i], i, list);
//     }
//   } else {
//     for (var key in list) {
//       callback(list[key], key, list);
//     }
//   }
// };

// _.each(['sally', 'georgie', 'porgie'], function (name, i, list) {
//   if (list[i + 1]) {
//     console.log(name, 'is younger than', list[i + 1]);
//   } else {
//     console.log(name, 'is the oldest.');
//   }
// });

//Exercise 5
// map = function (list, callback) {
//   let storage = [];
//   for (let i = 0; i < list.length; i++) {
//     storage.push(callback(list[i], i, list));
//   }

//   return storage;
// };

// map([1, 2, 3], function (val) {
//   return val + 1;
// });

//Exercise 6
//We are going to want to filter by those who were present, but first we need to write our filter function:
const _ = {};
// _.filter = function(array, callback) {
//   const storage = [];
//   for (let i = 0; i < array.length; i++) {
//     if ( callback(array[i], i, array) === true) {
//       storage.push(array[i])
//     } else
//   }
//   return storage;
// }

//Exercise 7
// const videoData = [
//   {
//     name: 'Miss Scarlet',
//     present: true,
//     rooms: [
//       { kitchen: false },
//       { ballroom: false },
//       { conservatory: false },
//       { 'dining room': false },
//       { 'billiard room': false },
//       { library: false },
//     ],
//   },
//   {
//     name: 'Mrs. White',
//     present: false,
//     rooms: [
//       { kitchen: false },
//       { ballroom: false },
//       { conservatory: false },
//       { 'dining room': false },
//       { 'billiard room': false },
//       { library: false },
//     ],
//   },
//   {
//     name: 'Reverend Green',
//     present: true,
//     rooms: [
//       { kitchen: false },
//       { ballroom: false },
//       { conservatory: false },
//       { 'dining room': false },
//       { 'billiard room': false },
//       { library: false },
//     ],
//   },
//   {
//     name: 'Rusty',
//     present: false,
//     rooms: [
//       { kitchen: false },
//       { ballroom: false },
//       { conservatory: false },
//       { 'dining room': false },
//       { 'billiard room': false },
//       { library: false },
//     ],
//   },
//   {
//     name: 'Colonel Mustard',
//     present: true,
//     rooms: [
//       { kitchen: false },
//       { ballroom: false },
//       { conservatory: false },
//       { 'dining room': false },
//       { 'billiard room': false },
//       { library: false },
//     ],
//   },
//   {
//     name: 'Professor Plum',
//     present: true,
//     rooms: [
//       { kitchen: false },
//       { ballroom: false },
//       { conservatory: false },
//       { 'dining room': false },
//       { 'billiard room': false },
//       { library: false },
//     ],
//   },
// ];

// _.filter(videoData, function (subspectObject) {
//   return subspectObject.present;
// });

//Functions
