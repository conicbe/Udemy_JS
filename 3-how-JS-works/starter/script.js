///////////////////////////////////////

//parsed and translated into machine code then executed.

// execution context
// all javeascripti is run is environment that is execution context. they are run in a box.  Defualt is global exection context. Runs code not isndie any functions and is associated with global object. Ie the dom
//properties are variable s attached to objects


// Lecture: Hoisting

/*
//create reprecsentation of execution contesxt object. 
 object has 3 properties
1) Variable object  funct args inner vari decl func decl
2) Scope chain  current var objec
3) this variable

*/
 
// hoisting with funcitons it only works with function declariations
/*
calculateAge(1930);

function calculateAge(year) {
    console.log(2019- year);
}

// function expression
// will not work for function expression 
//retirement(1990);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990);

//hoisting with variables
// variable siwth no data type are undefined
console.log(age);
var age = 23;
console.log(age);

console.log('  ');

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

//biggest advantage of hoisting is that we can use functions declarations before we declare them.

*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

//global scope is default scope
//scopes only go one way. 
/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

//focus on global vs local scope
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(b + c);
        third()
    }
}

//third function can't access var c as it outside scope chain
// only can access a whihc is global and d which locally defined
function third() {
    var d = 'John';
    console.log(a + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword

/*
Notes
this keyword is not assigned a value untill function where it id defined is acutaully called
*/

// this means the this keyword varioable is the window oobject (defualt object)
//console.log(this);

//calculateAge(1985);

//in regular funciton call, this always points to defulot object
// the function this is attached to is the global object
/*
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
*/

// this keyword refers to object that called the method
 var john = {
     name: 'john',
     yearbirth: 1990,
     //thisis function expression
     calculateAge: function() {
         console.log(this);
         console.log(2016 - this.yearbirth);

         //take things further. Its a regular function call which had defalt object of browser wind
         /*
         function innerFunction() {
             console.log(this);
         }
         innerFunction(); */
     }
 }

 //call method
 john.calculateAge();

 var mike = {
      name: 'Mike',
      yearbirth: 1985
 };
//neat js trick
mike.calculateAge = john.calculateAge;
//call the function
mike.calculateAge();
