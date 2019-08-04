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


     // some coede


 })();

 //seperation of concerns for top two. Stand alone
 //UI CONTROLLER
 var UIController = (function() {

     return {
         getinput: function() {
             //return an object with three properties
             return {
                type: document.querySelector('.add__type').value, // Will be either income or expenses
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
             };
         }
     };

 })();

//this is how the two connect
// GLOBAL APP CONTROLLER
 var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        
        // 1. get field input data
        var input = UICtrl.getinput();
        console.log(input);
        // 2. add item to budget contrroller

        //3. add item to ui

        //4. caluclate budget

        //5. diasplay budge on uo.
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    //adding in keypress 'Enter' as well
    //it seems to call the functio twice??
    document.addEventListener('keypress', function(event){
       
        if(event.keyCode === 13 || event.which === 13) {
            //call function
            ctrlAddItem();
        }


    });

 })(budgetController, UIController);

















