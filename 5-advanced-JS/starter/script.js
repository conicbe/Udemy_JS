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
/*

function retirement(retirementAge) {
    var a = ' years left untill retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


var retirementUS = retirement(66);
var retirementNZ = retirement(65);
var retirementAus = retirement(76);

retirementUS(1990);
retirementNZ(1990);
retirementAus(1990);
*/

//retirement(66)(1993);

//closures have access to vaurables and peremeters of its outer function, even after the outer function has returned.
//above example inner function uses both retirement age and var a, which are outside scope

//rewrite this function using closures
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
*/

//rewriting above statement to use closures.
//second lot of code is wrong
/*

function interviewQuestion(job) {
    return function(name){
        if(job == 'designer'){
            console.log(name + 'what is ux?');
        } else if(job === 'teacher'){
            console.log(name + ' what do youteache?');
        } else {
            console.log('hello ' + name + 'wwhat do you do');
        }
    }
}

var teacher = interviewQuestion('teacher');
teacher('John');
var designer = interviewQuestion('designer');
designer('Sally');
var other = interviewQuestion('gangster');
other('young thug');


//this code was on the right track but still wrong.
function name(name) {
    var a = ' works as a ';
    return function(job) {
        console.log(name + a + job);
    }
}

var yourname = name('Jason');
yourname('teacher');
var designer = name('Sally');
designer('designer');
var unsure = name('secret');
unsure('ninja');
*/

//=============================================
//bind call and apply

/*
var john = {
    name: 'john',
    age: 23,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('good ' + timeOfDay + ' ladies and gentleman! I\'m ' +this.name + ', I\'mm a '+ this.job + ' and I\'m ' + this.age + ' years old');
        } else if(style === 'friendly'){
            console.log('Hey whats up!! I\'m ' +this.name + ', I\'mm a '+ this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

//we can 'borrow' the method from john and use it on our emily object. Sets this method to emily
john.presentation.call(emily, 'friendly', 'afternoon');

//this won't work as we don't have two arrawas taht we pass into the funciton
//john.presentation.apply(emily,['friendly', 'afternoon']);

//bind lets you preset arguments
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning (bind funcion)');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('good morning peeps');


//in prev exapmple, ages had to be over 18, which varies from country to country.
var years = [1990, 1984, 1992, 1924, 1999, 2004];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        //fn is the callback function
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//below are three examples of callback functions which are passed as input to the arrayCalc funcitons

//can only have one input which is fn(arr[i]);
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}




//this is changed
//to get two inputs, we have to bind a preset value of 20 to funciton and then call it as usual
//the binded element needs to be the first element
function isFullAge(limit, el) {
    //will return true of false depending on if over 20 0r not.
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
//this shows how we can use bind method in real world situations. The isFull age requires two arguments but we can bind the preset limit
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

/*
var ages = arrayCalc(years, calculateAge);
var isFullAge = arrayCalc(ages, isFullAge);

console.log(ages);
console.log(isFullAge);

*/


//=============================================
//Coding challange

//this was my pathetic attempt at making this..
//It acutally works suprisingly.

/*
var Questions = function(question, possibleAnswers, correctAnswer){
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
};

var question1 = new Questions('is Javascript cool?', ['0 yes', '1 No'], 1);

var question2 = new Questions('Will I eventually finish this course', ['its possible', 'unlikely'], 0);

var question3 = new Questions('is coding worth it?', ['0 yes', '1 No'], 1);

var questionsArray = [question1, question2, question3];
console.log(questionsArray);

//generate random number between 0 1
var item = questionsArray[Math.floor(Math.random()*questionsArray.length)];
console.log(item.question);
console.log(item.possibleAnswers[0]);
console.log(item.possibleAnswers[1]);

prompt('what is the correct answer?');
if(input = item.correctAnswer)
{console.log('answer is correct')
} else{console.log('wrong answer')}

*/

//we put this in self involed functjion expression
//this keeps all of the code safe. EG if the code was moved in to another project, none of the vairales would conflict with others, even if they had the same naem
/*
(function() {
    //funciton will go here///
})();
*/

/*
(function() {
    

var Questions = function(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

//add the display question method to the prototype
Questions.prototype.displayQuestion = function(){
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++){
        console.log(i + ' :  ' + this.answers[i]);
    }
}

//return result
Questions.prototype.checkAnswer = function(ans) {
    if(ans === this.correct){
        console.log('correct answer ');
    } else {
        console.log('wrong answer, try again');
    }
}

var q1 = new Questions('What is my bike', ['anthem', 'trance', 'reign'], 1);

var q2 = new Questions('How long have I been coding', ['just started', '3 - 6 Months', '6 - 12 Months', '12 plus months.'], 3);

var q3 = new Questions('What is my target weight?', [24, 34, 88, 95, 107], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random()*questions.length);
questions[n].displayQuestion();

//coding cmd prompt
//we parse int to make number
var answer = parseInt(prompt('Please select the correct answer'));

//we have to pass in answer from user which is stored in variable
questions[n].checkAnswer(answer);


})();
*/

(function() {
    

    var Questions = function(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    //add the display question method to the prototype
    Questions.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ' :  ' + this.answers[i]);
        }
    }
    
    //return result
    Questions.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if(ans === this.correct){
            console.log('correct answer ');
            sc = callback(true);
        } else {
            console.log('wrong answer, try again');
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Questions.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score);
        console.log('================');
    }
    
    var q1 = new Questions('What is my bike', ['anthem', 'trance', 'reign'], 1);
    
    var q2 = new Questions('How long have I been coding', ['just started', '3 - 6 Months', '6 - 12 Months', '12 plus months.'], 3);
    
    var q3 = new Questions('What is my target weight?', [24, 34, 88, 95, 107], 2);

    var questions = [q1, q2, q3];

    //adding the score updater using closures
    function score() {
        var sc = 0;
        return function(correct) {
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){
    
        var n = Math.floor(Math.random()*questions.length);
        questions[n].displayQuestion();
        
        //coding cmd prompt
        //we parse int to make number
        var answer = (prompt('Please select the correct answer'));
        
    

        if(answer !== 'exit'){
            //we have to pass in answer from user which is stored in variable
            //we can add keep score to check answer as functions are first class objects
            questions[n].checkAnswer(parseInt(answer), keepScore);
                //call funciton again
                nextQuestion();
        } else {
            console.log('game over');
        }


    }

    nextQuestion();


    
    
    })();



