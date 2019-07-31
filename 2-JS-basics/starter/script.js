/*  VAriables and data types*/

/*
var firstName = 'John';
console.log(firstName);

var job;
console.log(job);

//single line comments

var job, isMarried, age;
job = 'teacher';
isMarried = false;
age = 22;

//alert and console log do same thing

alert(firstName + ' is a ' + age + ' year old.')

var lastName = prompt('what is his last name');
console.log(firstName + ' ' + lastName);
*/

//dry principles
/*
var year = 2018;
var yearJohn = year - 28;
var yearMark = year - 33;

console.log(yearJohn);

console.log(typeof "hello");
var x;
console.log(typeof x);
*/

//learning operators 
/*
var now = 2018;
var yearJohn = 1988;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
*/

//coding challange 1

// this works as it should 
/*
var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI, results;

markMass = 60;
johnMass = 70;
markHeight =172;
johnHeight= 173;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

results = markBMI > johnBMI;
//does Mark have a higher BMI then John?
console.log('Does mark have a bigger BMI then john : ' + results);
console.log('marks bmi is ' + markBMI);
console.log('johns bmi is ' + johnBMI);
 */


//ternery Operators and switch statements

/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' is over 18'): console.log(firstName + ' is less than 18 years old.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink )

//same thing wiht if esle
if(age >= 18) {
    var rink = 'beer';
} else {
    var rink = 'juice';
}
console.log(rink);


//game
var mary = 3;
var nate = 2;
var jason = 1;

if(mary>nate && mary>jason){
    console.log('marys team won with a score of ' + mary);
} else if(nate>mary&& nate>jason){
    console.log('nates team won with a score of ' + nate);
} else if(console.log('hello'));



//coding challange #2

//John scores 89, 128, 183

//Mike 119, 94, 123 
*/

/* 




var johnScore = Math.round((89 + 128 + 183) / 3);
var mikeScore = Math.round((119 + 134 + 123) / 3);
var maryScore = Math.round((97 + 134 + 185) / 3);
console.log(johnScore, mikeScore, maryScore);

if (johnScore > mikeScore && johnScore > maryScore) {

}


/*
//this code is no good for 3 operators
if (johnTeamAverageScore>MikeTeamAverageScore){
    console.log(' johns team bet mikes team wiht an average score of ' + johnTeamAverageScore);
} else if (MikeTeamAverageScore > johnTeamAverageScore) {
    console.log('Mikes team bet Johns team with an average score of ' + MikeTeamAverageScore);
} else {
    console.log(' the teams tied with an average score of ' + johnTeamAverageScore);
} 
*/


 //funtions
 //simple example
/*
function calculate(birthYear) {
    return 2018 - birthYear;
};

var ageJohn = calculate(1990);
var ageMike = calculate(1944);
var ageSam = calculate(1923);

console.log(ageJohn, ageMike, ageSam);

//complex funtions
// functions can call other funcitons and they don't have to return ar  reuslt 
function yearsUntillRetirement(year, firstName) {
    var age = calculate(year);
    var retirement = 65 - age;

    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.')
    } else {
        console.log(firstName + ' has already retired');
    }
}

yearsUntillRetirement(1998, 'Sam');
yearsUntillRetirement(1923, 'Onix');
yearsUntillRetirement(1956, 'Stanley');
*/

// Function statement expressions
/*

//function declaration
//function whatDoYouDo(job, firstName);
//function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teachers kids how to code';
        case 'desighner':
            return firstName + ' is a designer';
        default:
            return firstName + 'does something else';
    }
}

console.log(whatDoYouDo('teaches', 'John'));

//expressionsr result in 1 result
//eg 2 + 3 = 5
// statements perform actions. no immdeiat statement
//eg if
*/

// Arrays
//initialize array
/*
var names = ['Jon', 'mark', 'jane'];
var years = new Array(1998, 1943, 1954);

console.log(names);
console.log(names[0]);
console.log(names.length);

//muted array datat
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Diffetne data types
var john = ['John', 'smith', 1998, 'designer', false];

john.push('blue');
john.unshift('adds to front');
console.log(john);

john.pop(); //removes end
john.shift(); //removes front
console.log(john);

//where is element in array. if null then return -1. Very useful for checking if item exists in array
console.log(john.indexOf(1998));

var isDesigner = john.indexOf('desigder') === -1 ? ' John is NOT a designer ': 'John IS a designer';

console.log(isDesigner);

*/
//coding challange #3
//declare empty variables
/*
var theBill = [];
var tips = [];
var totalPayed = [];


//this is a funciton declartion
function tipCalculator(bill){
    if(bill < 50) {
        theBill.push(bill);
        tips.push((bill * 0.2));
        totalPayed.push(Math.round(bill * 1.2));
    } else if(bill >50 && bill < 200){
        theBill.push(Math.round(bill));
        tips.push(Math.round(bill * 0.15));
        totalPayed.push(Math.round(bill * 1.15));
    } else{
        theBill.push(Math.round(bill));
        tips.push(Math.round(bill * 0.1));
        totalPayed.push(Math.round(bill * 1.1));
    }
}

// Usingk the function and savingk the result in to the array.

tipCalculator(199);
tipCalculator(200);
tipCalculator(49);

//blank arrays below
console.log('amount spent on bills');
console.log(theBill);
console.log('amount spent on tips');
console.log(tips);
console.log('total to pay');
console.log(totalPayed);

*/
//this is a more efficent way of coding the same jthing above

/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}

// testing the funciton works properly
//console.log(tipCalculator(2000));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]), tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0], 
                    bills[1] + tips[1],
                bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(finalValues);
*/

// objects lesson 24

//creating object with key value pairs
/*
var john = {
    firstname: 'John',
    lastName: 'Smith',
    birthyear: 1990,
    family: ['jane', 'mark', 'bob'],
    job: 'teacher',
    isMarried: false
}

//retrieving information we can use dot notation or brackets
console.log(john.firstname);
console.log(john['lastName'])
var x = 'family';
console.log(john[x])

//muted objects
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// create a new object
var jane = new Object();
jane.name = 'jane';
jane.virthyar = 1998;
jane['lastName'] = 'smith';
console.log(jane);
*/

//learning about object methods. funcitons attached to objects are methods
//this is a speical keyword

/*

var john = {
    firstname: 'John',
    lastName: 'Smith',
    birthYear: 1995,
    family: ['jane', 'mark', 'bob'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        //this.example creates a new variable which we can store directly into the object
        this.newvariable =  2018 - this.birthYear;
    }
}

//console.log(john.calcAge());
//how to store the age in the opbject
john.calcAge();
console.log(john);

//coding challange 4

var Mark = {
    firstname: 'John',
    lastName: 'Smith',
    birthyear: 1990,
    family: ['jane', 'mark', 'bob'],
    job: 'teacher',
    isMarried: false,
}
*/

// create object with properties of full name, height and mass
/*
var mark = {
    fullName: 'Mark Smith',
    height: 1.95,
    mass: 719,
    BMI: function(){
        this.bmi =  (this.mass / (this.height * this.height));
        return this.bmi
    }
}

//save to private variable so can be used outside scope
mark.BMI();
console.log('marks mbi is ' + mark.BMI());
//add method to each object to return the bmi


var john = {
    fullName: 'John Doe',
    height: 1.95,
    mass: 719,
    BMI: function(){
        return (this.johnBMI = (this.mass / (this.height * this.height)));
    }
}

john.BMI();
console.log('Johns BMI is ' + john.BMI());


//compare these two statements
console.log( 'marks bmi is ' + mark.bmi + ' and jons bmi is ' + john.bmi);

//I declared these as variables but I didn't need to . could ahve just had john.BMI 
var outcome;
if (mark.bmi > john.bmi) {
    outcome = mark.fullName + ' has a bigger BMI';
} else if (john.bmi > mark.bmi) {
    outcome = johnBmi.fullName + ' has bigger BMI';
} else (outcome = 'they are the same')

console.log(outcome);

//ways to retrieve info from objects 
// console.log(object.property)
//console.log(object['property'])
*/

//Loops and iterations


// initial counter, iteraton, when to stop
/*
for (var i = 0; i < 10; i+=2){
    console.log(i);
}

//looping through arrays
var john = ['john', 'smith', 1009, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//can also be done with while loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/
//continue and break statements
/*
var john = ['john', 'smith', 1009, 'designer', false];
for (var i = 0; i < john.length; i++) {
    //if typeof is not equal to string/ continue. 
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
console.log(" ")
for (var i = 0; i < john.length; i++) {
    //if typeof is not equal to string/ continue. 
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}
console.log(" ")
// run through for loop backwards
for (var i = john.length -1; i >= 0; i--) {
    //if typeof is not equal to string/ continue. 
    console.log(john[i]);
}
*/

//coding challange 5
//below is my very sloppy attempt at a solution
/////
//

//johns bills 124, 48, 268, 188, 42

//implement a tip cal using obejecst and lops

//craete object with array for bill values
/*
var johnBills = {
    bills: [124, 48, 268, 188, 42],
    tips: [],
    total: []
}

//add a method to calculate the tip
for(i = 0; i < johnBills.bills.length; i++){
    var percentage;
    if(johnBills.bills[i] < 50){
    percentage = 0.2
    } else if(johnBills.bills[i] >= 50 && johnBills.bills[i] < 200){
    percentage = 0.15
    } else{ 
    percentage = 0.1
    }
    johnBills.tips.push(johnBills.bills[i] * percentage);
    johnBills.total.push(johnBills.bills[i] + (percentage * johnBills.bills[i]));

    //declare % up top and do at botton
}
console.log(johnBills.bills);
console.log(johnBills.tips);
console.log(johnBills.total);


//marks family part 2
//

var marksBills = {
    bills: [77, 375, 110, 45],
    tips: [],
    total: []
}

//add a method to calculate the tip
for(i = 0; i < marksBills.bills.length; i++){
    var percentage;
    if(marksBills.bills[i] < 100){
    percentage = 0.2
    } else if(marksBills.bills[i] >= 100 && marksBills.bills[i] < 300){
    percentage = 0.1
    } else{ 
    percentage = 0.25
    }
    marksBills.tips.push(marksBills.bills[i] * percentage);
    marksBills.total.push(marksBills.bills[i] + (percentage * marksBills.bills[i]));

    //declare % up top and do at botton
}

console.log('marks bills' + marksBills.bills);
console.log('marks tips ' + marksBills.tips);
console.log('markst total bills ' + marksBills.total);

//create a function to calculate the average tips in the array

var sum = 0;
function averageTip(){
for(i = 0; i <= marksBills.tips.length-1; i++){
    sum = sum + marksBills.tips[i];
    }
}
//calls the function
averageTip();

//results

console.log('the averatge tip for marks family is is ' + sum / marksBills.tips.length);

//funciton for jon
var sum2 = 0;
function averageTip2(){
for(i = 0; i <= johnBills.tips.length-1; i++){
    sum2 = sum2 + johnBills.tips[i];
    }
}
//calls the function
averageTip2();

//results

console.log('the averatge tip for JOHNS family is is ' + sum / johnBills.tips.length);
*/

var john = {
    fullName: 'john smith',
    bills: [124, 48, 268, 180],
    //this is cool as to initialse new empty arrays in the funtion
    // this is a calcTips Method NOT A FUNCTION!!!!
    calcTips: function() {
        //I forgot to use the this.tips/ thisl final vlaues in my example
        this.tips = [];
        this.finalvalues = [];

        for (var i = 0; i < this.bills.length; i++){
            //determine tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = 0.2;
            } else if(bill >= 50 && bill < 200){
                percentage =0.15;
            } else {
                percentage = 0.1;
            }
            //add result to corrosping arrays
            this.tips[i] = bill * percentage;
            this.finalvalues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 5, 110, 45],
    //this is cool as to initialse new empty arrays in the funtion
    // this is a calcTips Method NOT A FUNCTION!!!!
    calcTips: function() {
        //I forgot to use the this.tips/ thisl final vlaues in my example
        this.tips = [];
        this.finalvalues = [];

        for (var i = 0; i < this.bills.length; i++){
            //determine tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = 0.2;
            } else if(bill >= 100 && bill < 300){
                percentage =0.1;
            } else {
                percentage = 0.25;
            }
            //add result to corrosping arrays
            this.tips[i] = bill * percentage;
            this.finalvalues[i] = bill + bill * percentage;
          }
    }
}

//create function to determine who paid the higesht in tips
//recieves tips array as input
function calcAverage(tips){
    var sum = 0;
    for( var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    //return statement needs to always go outside of the for statement
    return sum / tips.length;
}

//the funcion is then called here and then printed to screen below
john.calcTips();
mark.calcTips();


// I didn't know you could add propertes directy to  objects
// also didin't know you couod pass arrasy as inputst o funtiions.
// Doing it hti swa prevents duplicated code on the functions
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) { console.log(john.fullName + '  \'s family pays higher tips with and average of $ ' + john.average)
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips with an average of $ ' + mark.average)
} else {
    console.log('they payed the same tips on oveage')};












