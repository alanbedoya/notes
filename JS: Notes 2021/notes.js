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
*

*/
