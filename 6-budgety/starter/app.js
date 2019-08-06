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

// BUDGET CONTROLLER///////////////////////////////////////////////////////
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

    //internal function
    var calculateTotal = function(type) {
        var sum = 0;
        //for each method has callback function
        data.allItems[type].forEach(function(cur) {
            sum = sum + cur.value;
        });
        //this adds sum to data totals
        data.totals[type] = sum;
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

        //create new method that calculates the budget
        calculateBudget: function() {
            
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate budget: income - expenses

            // calculate percentage of income
        },

        //just so we can see in kthe console
        testing: function() {
            console.log(data);
        }
    }

 })();

 //UI CONTROLLER/////////////////////////////////////////////////////////////////////////

 var UIController = (function() {

    //creating data structure to make changing class names in the future a lot easier
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };
    //how do we add dom strings outside of class

     return {
         getinput: function() {
             //return an object with three properties
             return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either income or expenses
                description: document.querySelector(DOMstrings.inputDescription).value,
                //convert string to floating decimal value
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value
                )};
         },

         // add another public 
         addListItem: function(obj, type) {
            var html, newHTML, element;
            // Create HTML string with placeholder text
            //putting in quotes and removing spaces works
            // just commenting this out for now as a quick test
            
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i>button></div></div></div>'
            }

            // Repladce the placeholder text with data
            newHTML = html.replace('%id%', obj.id);
            //we have replaced new placeholder
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);

            //insert html into the dom
            document.querySelector(element).insertAdjacentHTML('afterend', newHTML);
         },

         //this is to clear the input fields
         clearFields: function() {
             var fields, fieldsArr;
             //select both fields in DOMstrings.  
             //query select returns a list not an array.
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            //convert list to array. Slice() returns copy of array that it is called on
            //fields.slice(); Won't work as is not array
            //We can get Array.prototype to use slice method. Pass in fields as input to call method.
            fieldsArr = Array.prototype.slice.call(fields);

            //we can use for loop to clear array input but we will use forEach method
            //I am a bit confused as to how this works with the anonynum function that is immediately called 
            fieldsArr.forEach(function(current, index, array) {
                    current.value = "";
            });
            //sets curser back to first element in array (which is searchbar);
            fieldsArr[0].focus();

         },
         
         getDOMstrings: function() {
             return DOMstrings;
         }
     };

 })();

//this is how the two connect
// GLOBAL APP CONTROLLER////////////////////////////////////////////////////////////////////////
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

    //need to keep these together
    //each function has a simple task
    var updateBudget = function() {
        
        // 1.. caluclate budget

        // 2. return the budget

        // 3. diasplay budge on uo.
    };

    //function that adds new item
    //this gets items back
    var ctrlAddItem = function() {
        var input, newItem;

        // 1. get field input data
        input = UICtrl.getinput();
        //worlds most confusing if/else statement. If input is not empty/ 
        if(input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. add item to budget contrroller
            //this returns an object which has to be saved in var
            newItem = budgetController.addItem(input.type, input.description, input.value);
            //3. add item to ui
            UICtrl.addListItem(newItem, input.type);
            //4. clear the field
            UICtrl.clearFields();
            //calculate and update budget
            updateBudget();
        }


    };

    //we want method to be public so we return in an object
    return {
        init: function() {
            setupEventListeners();
        }
    };

 })(budgetController, UIController);

controller.init();














