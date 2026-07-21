// 1. Variable Annotations

let EmployeeName: string = "Ravi";
let employeeId: number = 2001;
let IsPermanent: boolean = true;

// 2. Function Annotation
function getEmployeeInfo(name: string, id: number): string {
    return `${name} is working with Employee ID ${id}.`;
}

// 3. Array Annotation
let departments: string[] = ["HR", "Finance", "IT"];

// 4. Using Variables and Function
const info: string = getEmployeeInfo(EmployeeName, employeeId);
console.log(info);
console.log(`Departments: ${departments.join(", ")}`);
console.log(`Permanent Employee: ${IsPermanent ? "Yes" : "No"}`);
/*
Type Safety Check
employeeId = "ABC"; // Error
*/