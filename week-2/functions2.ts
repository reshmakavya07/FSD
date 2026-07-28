// 1. Function with Return Type
function greetEmployee(name: string): string {
    return `Hello, ${name}`;
}

// 2. Default Parameter
function getDepartment(dept: string = "IT"): string {
    return `Department: ${dept}`;
}

// 3. Optional Parameter
function employeeDetails(id: number, email?: string): void {
    console.log(`Employee ID: ${id}`);
    if (email) {
        console.log(`Email: ${email}`);
    }
}

// 4. Rest Parameter
function totalSalary(...salary: number[]): number {
    return salary.reduce((sum, value) => sum + value, 0);
}

// Testing
console.log(greetEmployee("Ravi"));
console.log(getDepartment());
console.log(getDepartment("HR"));
employeeDetails(1001);
employeeDetails(1002, "ravi@gmail.com");
console.log(`Total Salary: ${totalSalary(25000, 30000, 35000)}`);