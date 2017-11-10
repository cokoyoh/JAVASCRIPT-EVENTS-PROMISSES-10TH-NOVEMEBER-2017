'use strict';

//This function will validate the form on built-in function onsubmit and calls the function displayNetsalary()
 function validateForm() {
     var basic_salary = document.getElementById("basic-salary").value;
     var nssf = document.getElementById("nssf").value;
     var nhif = document.getElementById("nhif").value;
     var other_deductions = document.getElementById("other-deduction").value;

     if(basic_salary == ""){
         alert("Please enter some value in the basic salary section")
     }  else {
         if(nssf == ""){
             alert("Please enter some value in the nssf section")
         } else{
             if(nhif == ""){
                 alert("Please enter some value in the nhif section")
             } else{
                 if(other_deductions == ""){
                     alert("Please enter some value in the other deductions section")
                 } Salary.displayNetSalary()
             }
         }
     }
 }