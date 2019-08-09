//hello world

//this has been abit of a pain

/*
*
planning the budgety game. What do I want this projet to do and how will it work

to do lis

add event handler
get input values
add new item to data structore
add new item to UI
calculate budge
Update the UI again


We build modules which organises and groups code together.

///UI module
get input values
add new item to UI
Update the UI again

///Data module
add new item to data structore
calculate budge

//Controller module
add event handler

*/

/*
the next to do list

> add event handler
> delete the item from our data structore
> delete item from ui
> recalc budge
> update ui
*/

/* event delegation
     
*/

// BUDGET CONTROLLER
var budgetController = (function() {

    //creating data models
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    //maybe this is the solution for my house project.
    Expense.prototype.calcPercentage = function(totalIncome){

        if (totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        //return
        return this.percentage;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //this is sample of how data structure could have been setup. Its much better to create though out data structures that store everything together
    /*
    var allExpenses = [];
    var allIncome = [];
    var totalExpenses = [];
    */

    //function only used internally for calcbudget function
    var calculateTotal = function(type){
        var sum = 0;
        //forEach has callback function. 
        data.allItems[type].forEach(function(cur) {
            sum = sum + cur.value;
                    /*
        0
        [200, 400, 100]
        sum = 0 + 20
        */
        });
        //save result to data structore
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1  //-1 is no value
    };

    //create public objedct that lets others store info in data structore
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //this retuns number of last item
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
         
            
            //create new item based on 'inc' or 'exp'
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            
            //push into data structure
            data.allItems[type].push(newItem);

            //return new Element
            return newItem;
        },

        //create delete item public object
        deleteItem: function(type, id) {
            var ids, index;
            // id = 6
            //data.allItems[type][id];
            // ids = [1 2 3 4]
            // index = 3;

            ids = data.allItems[type].map(function(current) {
                // this will return a new array
                return current.id;
            });

            index = ids.indexOf(id);

            //-1 is value that isn't found
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function() {

            /// cal total inc and exp
            calculateTotal('exp');
            calculateTotal('inc');

            // calc budget inc - exp
            data.budget = data.totals.inc - data.totals.exp;
            // cal % income spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
      
            // Expenses = 100, inc 200. spend half. 100/200=0.5 *100 = 50%;
        },

        calculatePercentages: function() {

            /*
            a=20
            b=10
            c=40
            icnome = 100
            a=20/100 = 20%;
            etc
            */

        //cur is not passed in as arg

        data.allItems.exp.forEach(function(cur){
            cur.calcPercentage(data.totals.inc);
             });
        },

        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },

        getBudget: function() {
            //saving all of these values into object
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        testing: function() {
            console.log(data);
        }
    }


    //we can always add methods through prototype chain

})();


// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel:'.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage'
    }
    
    //we always return objects that have methods we need
    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, // will be inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHTMl, element;
            //create HTML string with placeholde text
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i>button></div></div></div>'
            }

            // replace placeholder text with data
            newHTMl = html.replace('%id%', obj.id);
            newHTMl = newHTMl.replace('%description%', obj.description);
            newHTMl = newHTMl.replace('%value%', obj.value);

            //insert html into dom
            //will be either income or expense
           document.querySelector(element).insertAdjacentHTML('beforeend', newHTMl);

        },

        deleteListItem: function(selectorID) {
            var el =  document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },

        //clearing all fields
        clearfields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
            fieldsArr = Array.prototype.slice.call(fields);

            //could use for loop but use forEach
            fieldsArr.forEach(function(current, index, arr) {
                current.value = "";
            });
            
            //select the starting value on submit after clearing
            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {

            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget; 
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc; 
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
  
            
            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';  
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
            /*
                    expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
            budget: data.budget,
            total: data.totals.inc,
            totalExp: data.totals.exp,
            percentage: data.percentage
            */

        },

        displayPercentages: function(percentages) {

            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            var nodeListForEach = function(list, callback) {
                for(var i = 0; i < list.length; i++){
                    callback(list[i], i);
                }
            };

            nodeListForEach(fields, function(current, index) {

                if (percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
                
            });
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

//seperation of concerns
// we pass in both modules as inputs to the third so they can use
var controller = (function(budgetCtrl, UICtrl) {

    //function for event listeners
    var setupEventListeners = function() {
        var DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
               ctrlAddItem();
            }
        });

        //add event listener to parent of delete items
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };

    var updateBudget = function() {

        //1. calc budget
        budgetCtrl.calculateBudget();
        //2. return budget
        var budget = budgetCtrl.getBudget();
        //3. display budget on ui
       // console.log(budget);
        UICtrl.displayBudget(budget);
    };

    var updatePercentages = function() {
        
        //1 calc percentages

        budgetCtrl.calculatePercentages();
        //2 read percentages from budget controller
        var percentages = budgetCtrl.getPercentages();
        //3 update ui wiht new percentages
        UICtrl.displayPercentages(percentages);
    };

    //gets called when we add new ctl item
    var ctrlAddItem = function() {

        var input, newItem;
        // 1. get input data

        input = UICtrl.getInput();
        //console.log(input);

        //stops duplicate code displayihng to UI( NAN )
        if (input.description !== "" && !isNaN(input.value) && input.value > 0){
            //2. add item to budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. Add the item to UI
            UICtrl.addListItem(newItem, input.type);

            //4. Clear the fields
            UICtrl.clearfields();

            //5. Caluclate and update budget
            updateBudget();

            // 6. calc and update %;
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID) {

            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            //this needs to be an integer
            ID = parseInt(splitID[1]);

            // 1 delete item from data structure
            budgetCtrl.deleteItem(type, ID)
            // 2 delete the item from UI
            UICtrl.deleteListItem(itemID);

            // 3 update and show new budget
            updateBudget();

            // 4. calc and update %;
            updatePercentages();
        }
    };

    return {
        init: function() {
            console.log('application has started');
            //we pass in object with empty paremetners
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }

})(budgetController, UIController);


controller.init();



