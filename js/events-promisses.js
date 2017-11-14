'use strict';
var isValidated  = false;

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
                       if(validationPassed) {
                           console.log(isValidated)
                           //Call the promise here
                       }
                   } else {
                       alert("Please enter some value in the other deductions section")
                   }
               } else alert("Please enter some value in the nhif section")
           } else alert("Please enter some value in the nssf section")
       } else alert("Please enter some value in the basic salary section")
     console.log(final_output,"here")

     return final_output
 }

//Define a promise to calculate if isValidated is true
var validationPassed = new Promise(function(resolve,reject){
    if(isValidated){
        var success = "Validation Passed";
        resolve(success)
    }else {
        var reason = new Error("Validation failed");
        reject(reason)
    }
});

var netSalary = function () {
    validationPassed.then(function (fulfilled) {
        console.log(fulfilled)
    })
        .catch(function (error) {
            console.log(error.message)
        })
}
netSalary()

//This is for custom events. This displays the message entered in the message box
document.getElementById("msgbox").addEventListener("submit", function(e) {
    e.preventDefault();
    var msg = e.currentTarget.getElementById("msg").value.trim();
    if (msg) {
        alert(msg);
    }
}, false);

