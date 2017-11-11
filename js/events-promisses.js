'use strict';
var isValidated  = false;

//Define a promise to calculate if isValidated is true
const netSalary = new Promise(function(resolve,reject){
    if(isValidated){
        var success = "Validation Passed"
        resolve(success)
    }else {
        var error = new Error("validation failed")
        reject(error)
    }
});

//This function will validate the form on built-in function onsubmit and calls the function displayNetsalary()
 function validateForm() {
       var basic_salary =  parseInt(document.getElementById("basic-salary").value);
       var nssf = parseInt(document.getElementById("nssf").value);
       var nhif = parseInt(document.getElementById("nhif").value);
       var other_deductions = parseInt(document.getElementById("other-deduction").value);

       if (basic_salary >= 0){
           console.log("There is some value")
           if(nssf >= 0){
               console.log("Got nssf value")
               if(nhif >= 0){
                   console.log("Got nhif value")
                   if(other_deductions >= 0){
                       isValidated = true;
                       console.log(isValidated)
                       //Define a promise here to take care of stuff is is validate is true
                   } else {
                       alert("Please enter some value in the other deductions section")
                   }
               } else alert("Please enter some value in the nhif section")
           } else alert("Please enter some value in the nssf section")
       } else alert("Please enter some value in the basic salary section")
 }

