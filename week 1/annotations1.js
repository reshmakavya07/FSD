"use strict";
// 1. Variable Annotations
let EmployeeName = "Ravi";
let employeeId = 2001;
let IsPermanent = true;
// 2. Function Annotation
function getEmployeeInfo(name, id) {
    return `${name} is working with Employee ID ${id}.`;
}
// 3. Array Annotation
let departments = ["HR", "Finance", "IT"];
// 4. Using Variables and Function
const info = getEmployeeInfo(EmployeeName, employeeId);
console.log(info);
console.log(`Departments: ${departments.join(", ")}`);
console.log(`Permanent Employee: ${IsPermanent ? "Yes" : "No"}`);
/*
Type Safety Check
employeeId = "ABC"; // Error
*/ 
