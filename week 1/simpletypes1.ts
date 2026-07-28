// Employee Details
let employeeName: string = "John";
let salary: number = 35000;
let isPermanent: boolean = false;
console.log("Type of employeeName:", typeof employeeName);
console.log("Type of salary:", typeof salary);
console.log("Type of isPermanent:", typeof isPermanent);
function employeeInfo(name: string, salary: number, permanent: boolean): void {
    console.log("Employee:", name);
    console.log("Salary:", salary);
    console.log("Permanent:", permanent ? "Yes" : "No");
}
employeeInfo(employeeName, salary, isPermanent);