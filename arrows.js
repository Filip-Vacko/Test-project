"use strict";
//everything should be clear from the comments below. Beware though, fat arrow function is not just syntactic sugar, but
// among other differences: "does not bind its own this, arguments, super, or new.target. These function expressions are
// best suited for non-method functions, and they cannot be used as constructors." (source: MDN)

const consoleFunction1 = function() {   //standard way of writing functions
    console.log("Hello world");
};

const consoleFunction2 = () => {  //fat arrow syntax
    console.log("Hello world");
};

const consoleFunction3 = () => console.log("Hello world");  //simplified syntax from above - since only one line of code
// is here, I can remove the curly braces

const consoleFunction4 = () => "Hello world"; // I can just pass a return value, this is equivalent to the function
// consoleFunction4s below

const consoleFunction4s = function () {
    return("Hello world");
};

//since all of the above functions are functionally equivalent (pun not intended), each of the function calls below will
// print "Hello world" to console

consoleFunction1();
consoleFunction2();
consoleFunction3();
console.log(consoleFunction4());
console.log(consoleFunction4s());

const fn1 = function () {
    let a = 2;
    let b = 3;
    return a + b;
};

const fn2 = () => {
    let a = 2;
    let b = 3;
    return a + b;
};

const fn3 = (a, b) => {  //I don't even have to define a and b
    return a + b;
};

console.log(fn1());
console.log(fn2());
console.log(fn3(3, 8));

setTimeout(() => console.log("Hello from me, too!"), 1000); //Obviously, I can use fat arrow syntax even inside other
// functions, etc., as can be seen here.
