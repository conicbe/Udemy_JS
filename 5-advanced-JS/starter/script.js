/* Notes 

Practincing the basics of github. git status, git add, git commit -m "message", git push

Its good to practice these things 

everything is an object
primitives are strings, numbers, booleans, undefined, null
arrays, fucntions, objects dates wrappers are objects

//other languages called classes
constructor
person {name, year, job, age}

instances
var jane {jane, 1990, gangster, 34}


*/

//Function constructor

/*

var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

//function constructors capital
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

//we can use this inheritence 
Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}

// can also use for properties
Person.prototype.lastName = "Smith";

//creating john object using instanciation
//new keyword creates empty objects
//person calls the function

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, "designer");
var mark = new Person('Mark', 1345, 'dust');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName, jane.lastName, mark.lastName);

*/

// Object.create

/*
var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1998;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name: { value: 'Jane' },
    yearof: { value: '1994'},
    job: { value: 'teacher'}
});

*/

/*
//Primitives vs Objects

//primitive variables are set. 

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects variables refer to original. So if original changes, the copy will change too as they refer to the same thing

//we don't pass an object into a function, only a reference to the object.
// Primitive values do not change

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age)

//functions
var age = 27;
var obj = {
    name: 'jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 38;
    b.city = 'San Fransisco';
}

change(age, obj);
console.log('age is ' + age);
console.log('city is ' + obj.city);

*/


//=============================================
//passing functions as arguments
//pretty difficult to get my head around but I will get there

/*
var years = [1990, 1984, 1992, 1924, 1999, 2004];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        //fn is the callback function
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//below are three examples of callback functions

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81){
        return Math.round(206.1 - (0.67 * el));
    } else {
        return -1;
    }

}

//we can use output from other functions. eg ages.

var ages = arrayCalc(years, calculateAge);
var isFullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(isFullAge);
console.log(rates);

*/

//=============================================
//functions retruning funtions
//Im unsure what a use case for this would be 
/*

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + 'what is ux?');
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log(name + ' what do youteache?')
        }
    } else {
        return function(name) {
            console.log('hello ' + name + 'wwhat do you do');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designer = interviewQuestion('designer');

teacherQuestion('John');
designer('jason');

//we can call another way too. interview question retuns a function then name is passed into function
interviewQuestion('teacher')('Mr Mouse');

*/

//=============================================
//immediately invoked functoin expressons

//one way to make random game that prints true is score is over 5 and false if not.

//old method. Decare function. Call functon
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
    console.log(score + '\n')
}
game();
*/

/*
( function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
    console.log(score);
})();

//we can also pass input into iffys
//goodluck value is 5
( function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
    console.log(score);
})(5);
*/

//code isn't reusable but is good for data privacy


//=============================================
//Closures
//hello github










