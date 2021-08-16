console.log('Notes');

/*
//Operator precdence

 Operator precedence determines the way in which operators are paresed with respect to each other. Operators with higher precedence become the operands of operators with lower precedence. 


 //What is the DOM?
 //DOM
 Document Object Model: Structured representation of HTML documents allows JS to access HTML elements and styles to manipulate them.


 //classList
 When wrting a classList remove or add make sure to not put a '.' in front of the class becuase you're not selecting the class you're calling it.


 //Operator
 +=	Addition assignment	Adds the value on the right to the variable value on the left, then returns the new variable value	x += 4;	x = x + 4;
-=	Subtraction assignment	Subtracts the value on the right from the variable value on the left, and returns the new variable value	x -= 3;	x = x - 3;
*=	Multiplication assignment	Multiplies the variable value on the left by the value on the right, and returns the new variable value	x *= 3;	x = x * 3;
/=	Division assignment	Divides the variable value on the left by the value on the right, and returns the new variable value	x /= 5;	x = x / 5;


 //toogle()
 It adss a class if it's not there or it will remove it. Ex: player0Element.classList.toggle('player--acitve);


 //High-level overview of JS
  * JS
    * JS is a high-level, object-oriented, multi-paradigm programming language.
  * High-level
    * Everything happens automatically
  * Garbage-collected 
    * Cleaning the memory so we don't have to
  * Interpreted or just-in-time compiled
    * Converts code to machine code (1's & 0's) to be complied. Happens inside the JS engine.
  * Multi-paradigm
    * Paradigm:
      * An approach and mindset of structuring code, which will direct your coding style and technique. 
      *  1)Procedural programming
      *  2)Object-oriented progrmaing (OOP)
      *  3)Functional programming (FP)
      * Imerative or Declarative 
  * Prototype-based object-oriented 
    *  More on it in the OOP section.
  * First-class functions 
    * In a language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions. 
  * Single-threaded & Non-blocking event loop 
    * Concurrency model: how the JS engine handles multiple tasks happening at the same time.
    * JS runs in one single thread, so it can only do one thing at a time.
    * Sounds like it would block the single thread. However, we want non-blocking behavior.
    * By using an event loop it takes long running tasks, executes thme in the background, and puts them back in the main thread once they are finished.  


 //The JS Engine and Runtime
 * Compilation vs. Interpretation 
  * Compilation:
    * Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer. 
      * See Video 90 for EX. 
  * Interpreetaion:
    * Interpreter runs through the source code and executes it line by line. 
      * See Video 90 for EX. 
  * Just-in-time (JIT) compilation
    * Entire code is converted into machine code at once, then executed immediately. 
      * See Video 90 for EX.    
  *JS engine
    * 1) Parsing 
    * 2) Compilaton
    * 3) Execution 
      * Happens in the Call Stack
    * 4) Optimization

  
//Execution contexts and The Call Stack 
* What is an execution context? 
  * Execution Context: 
   * Environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed.
  * Execution steps: 
    * Compilation
    * Creation of global execution context (for top-level code)
    * Execution of top-level code 
    * Execution of functions and waiting for callbacks
* Exactly one global execution context (EC):
  * Default context, created for code that is not inside any function (top-level). 
* One execution context per function: 
  * For each function call, a new execution context is created. 
* What's inside execution context?
  * Variable Environment 
    * let, const, and var declarations
    * functions
    * arguments object 
  * Scope chain
  * this keyword
    * Generated during "creation phase", right before execution    
* The Call Stack
  * "Place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution. 
  * Like a map. 
  

//Scope and The Scope Chain
* Scope Concepts 
  * Scoping:
    * How our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?" 
  * Lexical Scoping:
    * Scoping is controlled by placement of functions and blocks in the code. 
  * Scope: 
    * Space or environment in which a certain variable is declared(variable environment in case of functions). There is a global scope, function scope, and block scope.
  * Scope of a variable: 
    * Region of our code where a certain variable can be accessed. 
* The 3 types of scope
  * Global Scope
    * Outside of any function or block
    * Variables declared in global scope are accessible everywhere
  * Function Scope
    * Variables are accessible only inside function, NOT outside
    * Also called local scope 
  * Block Scope (ES6)
    * Variables are accessible only inside blcok(block scoped)
    * However, this only applies to let and const variables!
    * Functions are also block scoped (only in strict mode)
* The Scope chain
  * Scopes have access to variables from all outer scopes. 
  * Variables in scope chain only look up the chain not down. 
  * let and const are block-scoped 
  * var is a function-scoped
* summary
  * Scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?"
  * There are 3 types of scope in JS: the global scope, scopes defined by functions, and scopes defined by blocks. 
  * only let and const variables are block-scoped. Variables declared with var end up in the closest function scope. 
  * In JS, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.
  * Every scope always has access to all the variables from all its outer scops. This is the scope chain!
  * When a vairable is not in the current scope, the engine looks up in the scope chain unitl it finds the variable it's looking for. This is called variable lookup.
  * The scope chian is a one-way street: a scope will never, ever have access to the variables of an inner scope. 
  * The scope chain is a certain scope is equal to adding together all the variable environments of the all parent scopes.
  * The scope chain has nothing to do with the order in which functions were called. It does not affet the scope chain at all!


//Scoping in Practice 
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
  }
  printAge();
  return age;
}

const firstName = 'Alan';
calcAge(1993);


//Variable Environment: Hoisting and The TDZ
* Hoisting in JS 
  * Hoisting
    * Makes some type of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope."
    * Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object. 
    * Function declarations
      * Hoisted: Yes
      * Initial Value: Actual function
      * Scope: Block (In strict mode. Otherwise the scope is function.)
    * Var variables 
      * Hoisted: Yes
      * Initial Value: Undefined
      * Scope: Function
    * Let and Const variables 
      * Hoisted: No
      * Initial Value: <uniitialized>, TDZ(Temporal Dead Zone)
      * Scope: Block
    * Function expressions and arrows 
      * Depends if using var or let/const  
      * Hoisted: ?
      * Initial Value: ?
      * Scope: ?  
  * Why TDZ?
    * Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided. 
    * Makes const variables actually work. 
  * Why Hoisting?
    * Using functions before actual declaration. 
    * var Hoisting is just a byproduct   
  * Hoisting example:
    * Variables
      * console.log(me);
        console.log(job);
        console.log(year);

        var me = 'Alan';
        let job = 'developer';
        const year = '1993'; 
    * Functions
    * console.log(me);
      console.log(job);
      console.log(year);
      
      var me = 'Alan';
      let job = 'developer';
      const year = '1993';
      
      console.log(addDecl(2, 3));
      console.log(addExpr(2, 3));
      console.log(addArrow(2, 3));
      
      function addDecl(a, b) {
        return a + b;
      }
      
      const addExpr = function (a, b) {
        return a + b;
      };
      
      const addArrow = (a, b) => a + b;   


//The this Keyword
* How the this keyword works
  * this keyword/variable: 
    * Special variable that is created for every execution context (every function). It takes the value of (points to) the "owner" of the function in which the this keyword is used. 
  * this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called. 
  * Method
    * this = <Object that is calling the method>
    * const alan = {
        name: 'Alan',
        year: 1993,
        calcAge: () => {
          return 2037 - this.year;
        },
      };
      alan.calcAge();
  * Simple function call
    * this = undefined
      * only in stric mode! Otherwise: window (in the browser)
  * Arrow functions
    * this = <this of surrounding function (lexical this)>
  * Event listener 
    * this = <DOM element that the handler is attached to>
  * new, call apply, bind
    * Will learn more latter. 
  * this does NOT point to the function itself, and also NOT the its variable environment! 


// Primitives vs Objects (Primitive vs Reference Types)
* Example:
  * let age = 30;
    let oldAge = age;
    age = 31;
    console.log(age);
    console.log(oldAge);

    const me = {
      name: 'Alan',
      age: 30,
    };

    const friend = me;
    friend.age = 27;
    console.log('Friend:', friend);
    console.log('Me:', me);


//Primitive vs Objects in practice
*Object.assign()
  * The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
  * Example:
    * const target = { a: 1, b: 2 };
      const source = { b: 4, c: 5 };

      const returnedTarget = Object.assign(target, source);

      console.log(target);
      // expected output: Object { a: 1, b: 4, c: 5 }

      console.log(returnedTarget);
      // expected output: Object { a: 1, b: 4, c: 5 }
  * Only works on the first level. Creates a shallow copy not a deep copy. Deep copy would copy everything. 


//Destructuring Arrays
* Destructuring Ex:
    * const arr = [2, 3, 4];
      const [x, y, z] = arr;
      console.log(x, y, z);
      output: 2 3 4
* Ex:
      * const resturant = {
          name: 'Pizza Shop',
          location: 'LA, CA',
          categories: ['Pizza', 'Salad', 'Pasta'],
          starterMenu: ['Garlic Bread', 'Wings', 'Ceaser Salad'],
          mainMenu: ['Pizza', 'Salad', 'Pasta'],
        
          order: function (starterIndex, mainIndex) {
            return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
          },
        };    

        let [main, , secondary] = resturant.categories;
        console.log(main, secondary);

    * Switching Variables
      * [main, secondary] = [secondary, main];
        console.log(main, secondary);

    * Receive 2 return values from a function
      * const [starterCourse, mainCourse] = resturant.order(2, 0);
        console.log(starterCourse, mainCourse);

    * Nested destructuring
      * const nested = [2, 4, [5, 6]];
        const [i, , j] = nested;
        console.log(i, j); 
        const [i, , [j, k]] = nested;
        console.log(i, j, k); 
    
    * Default Values
      * const [p, q, r = 6] = [8, 9];
        console.log(p, q, r);


// Destructuring Objects
*EX:
  * const restaurant = {
      name: 'Classico Italiano',
      location: 'Via Angelo Tavanti 23, Firenze, Italy',
      categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
      starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
      mainMenu: ['Pizza', 'Pasta', 'Risotto'],

      openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },

      order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
      },

      orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '5:00pm',
        address,
      }) {
        console.log(
         `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
        );
      },
    };

    restaurant.orderDelivery({
      time: '10:30 pm',
      address: 'Via del Sole, 21',
      mainIndex: 2,
      starterIndex: 2,
    });

    restaurant.orderDelivery({
      address: 'Saunders Rd., 322',
    });

    const { name, openingHours, categories } = restaurant;
    console.log(name, openingHours, categories);

    const {
      name: restaurantName,
      openingHours: hours,
      categories: tags,
    } = restaurant;
    console.log(restaurantName, hours, tags);

  * Default values
    const { menu = [], starterMenu: starters = [] } = restaurant;
    console.log(menu, starters);

  * Mutating variables
    let a = 111;
    let b = 999;
    const obj = { a: 23, b: 7, c: 14 };
    ({ a, b } = obj);
    console.log(a, b);

  * Nested objects
    const {
      fri: { open: o, close: c },
    } = openingHours;
    console.log(o, c);        


 // The Spread Operator (...) 
 * EX: 
    * const restaurant = {
      name: 'Classico Italiano',
      location: 'Via Angelo Tavanti 23, Firenze, Italy',
      categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
      starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
      mainMenu: ['Pizza', 'Pasta', 'Risotto'],

      openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },
    
      order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
      },
    
      orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '5:00pm',
        address,
      }) {
        console.log(
          `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
        );
      },
    };

    const arr = [7, 8, 9];
    const theBadWay = [1, 2, arr[0], arr[1], arr[2]];
    console.log(theBadWay);

    const theRightWay = [1, 2, ...arr];
    console.log(theRightWay);

    const newMenu = [...restaurant.mainMenu, 'Gnocci'];
    console.log(newMenu);

  * Copy Array
    * const mainMenuCopy = [...restaurant.mainMenu];

  * Join 2 arrays
    * const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
      console.log(menu);

  * Iterables: arrays, strings, maps, sets. NOT objects
    * const str = 'Alan';
      const letters = [...str, ' ', 'B.'];
      console.log(letters);

 
// Rest Pattern and parameters
* EX: 
  * const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
      starterIndex = 1,
      mainIndex = 0,
      time = '5:00pm',
      address,
    }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
      );
    },

    orderPasta: function (ing1, ing2, ing3) {
      console.log(
        `Here is your declicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
    },

    orderPizza: function (mainIngredient, ...otherIngredient) {
      console.log(mainIngredient);
      console.log(otherIngredient);
    },
  };

  * SPREAD, because on RIGHT side of =
    * const arr = [1, 2, ...[3, 4]];

  * REST, because on LEFT side of =
    * const [a, b, ...others] = [1, 2, 3, 4, 5];
      console.log(a, b, others);

  const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
  ];
  onsole.log(pizza, risotto, otherFood);

  * Objects
    * const { sat, ...weekdays } = restaurant.openingHours;
      console.log(weekdays);

  * Functions
    * const add = function (...numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) sum += numbers[i];
      console.log(sum);
    };

    add(2, 3);
    add(5, 4, 7, 2);
    add(8, 2, 5, 3, 2, 1, 4);

    const x = [23, 5, 7];
    add(...x);

    restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
    restaurant.orderPizza('mushrooms');     


// Short Circuiting (&& and ||)
* EX:
  * const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
      starterIndex = 1,
      mainIndex = 0,
      time = '5:00pm',
      address,
    }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
      );
    },

    orderPasta: function (ing1, ing2, ing3) {
      console.log(
        `Here is your declicious pasta with ${ing1}, ${ing2}, and ${ing3}`
      );
    },

    orderPizza: function (mainIngredient, ...otherIngredient) {
      console.log(mainIngredient);
      console.log(otherIngredient);
    },
  };

  * Logical operators:
    * Use ANY data type, return ANY data type, short-circut evalution or short-circuiting
  * OR
    * console.log(6 || 'Alan');
      console.log('' || 'Alan');
      console.log(true || 0);
      console.log(undefined || null);

      restaurant.numGuests = 23;
      const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
      console.log(guests1);

      const guests2 = restaurant.numGuests || 10;
      console.log(guests2);

  * AND
    * console.log('--- AND ---');
    console.log(0 && 'Alan');
    console.log(6 && 'Alan');
    console.log('Hello' && 23 && null && 'Alan');

  * Practical Example
    * if (restaurant.orderPizza) {
        restaurant.orderPizza('pepperonie', 'mushrooms');
      }

      restaurant.orderPizza && restaurant.orderPizza('pepperonie', 'mushrooms');







































        


*/

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '5:00pm',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//Logical operators:
//Use ANY data type, return ANY data type, short-circut evalution or short-circuiting
//OR
console.log(6 || 'Alan');
console.log('' || 'Alan');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//AND
console.log('--- AND ---');
console.log(0 && 'Alan');
console.log(6 && 'Alan');
console.log('Hello' && 23 && null && 'Alan');

//Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('pepperonie', 'mushrooms');
}

restaurant.orderPizza && restaurant.orderPizza('pepperonie', 'mushrooms');
