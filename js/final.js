// Whole-script strict mode syntax enabled here
'use strict';

//Object defined here with all the functions operating on it defined inside it. This is encapsulation
var Salary = {
    basic_salary : 20000,
    nhif : 234,
    nssf : 850,
    other_deduction: 0,

    /*
    this is a JavaScript function/ method created on the prototype method,
    this means that the methods are defined in the object literal hence can be accessed
    by all instances of the Salary object
     */
    netSalary : function () {
        return this.basic_salary - (this.nssf + this.nhif + this.other_deduction);
    },

    //this is a function too which uses a closure netSalary()
    displayNetSalary : function () {
        console.log("Your net salary = KSh " + this.netSalary())
        alert("Your net salary = KSh " + this.netSalary())
    }
}
function onCalculateSubmit () {
    Salary.basic_salary = parseInt(document.getElementById("basic-salary").value);
    Salary.nssf = parseInt(document.getElementById("nssf").value);
    Salary.nhif = parseInt(document.getElementById("nhif").value);
    Salary.other_deduction = parseInt(document.getElementById("other-deduction").value);
    Salary.displayNetSalary()
    // console.log(Salary.basic_salary, Salary.displayNetSalary())
}
