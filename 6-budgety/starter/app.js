/*
// to do list

add event handler 
get input values
add new item to data structure
add new item to ui
caluclate budger

//creating modules with samples of how to split them

//UI module
get input values
add new item to ui
update the UI

///Data Module
add new item to data structure
caluclate budger

//Controler Modale
add event handler

*/

// BUDGET CONTROLLER
 var budgetController = (function() {

    //create function constructor to initialize objects
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //data structures. Got to be efficiient. Below are examples of objects inside objects
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //Create new ID
            // this will only happen if array length is > 0.
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
     
            //using function constructor defined above
            //Create new item based on 'inc' or exp type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //type will be exp or inc
            //push into datat structore
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },
        //just so we can see in kthe console

        testing: function() {
            console.log(data);
        }
    }


 })();


 //seperation of concerns for top two. Stand alone
 //UI CONTROLLER
 var UIController = (function() {

    //creating data structure to make changing class names in the future a lot easier
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    //how do we add dom strings outside of class

     return {
         getinput: function() {
             //return an object with three properties
             return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either income or expenses
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
             };
         },

         getDOMstrings: function() {
             return DOMstrings;
         }
     };

 })();

//this is how the two connect
// GLOBAL APP CONTROLLER
 var controller = (function(budgetCtrl, UICtrl) {

    //function that sets up event listeners
    var setupEventListeners = function(){
        var DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        //adding in keypress 'Enter' as well
        //it seems to call the functio twice??
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13) {
            //call function
            ctrlAddItem();
            }
        });
    };

    //function that adds new item
    var ctrlAddItem = function() {
        var input, newItem;
        // 1. get field input data
        input = UICtrl.getinput();
        // 2. add item to budget contrroller
        //this returns an object which has to be saved in var
        budgetController.addItem(input.type, input.description, input.value);
        //3. add item to ui

        //4. caluclate budget

        //5. diasplay budge on uo.
    };

    //we want method to be public so we return in an object
    return {
        init: function() {
            setupEventListeners();
        }
    };

 })(budgetController, UIController);

controller.init();














