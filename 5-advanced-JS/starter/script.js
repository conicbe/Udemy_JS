/* Notes 

Practincing the basics of github. git status, git add, git commit -m "message", git push

Its good to practice these things 

everything is an object
primitives are strings, numbers, booleans, undefined, null
arrays, fucntions, objects dates wrappers are objects

constructor
person {name, year, job, age}

instances
var jane {jane, 1990, gangster, 34}


*/

//Function constructor

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

//creating john object using instanciation
//new keyword creates empty objects
var john = new Person('John', 1990, 'teacher');



























