class Employee {
    empName: string;
    basicSalary: number;
    constructor(name?: string, salary?: number) {
        this.empName = name || "Employee";
        this.basicSalary = salary || 20000;
    }
    calculateSalary(): number {
        let hra = this.basicSalary * 0.20;
        let da = this.basicSalary * 0.10;
        return this.basicSalary + hra + da;
    }
    display(): void {
        console.log("Employee:", this.empName);
        console.log("Basic Salary:", this.basicSalary);
        console.log("Net Salary:", this.calculateSalary());
    }
}
const e1 = new Employee();
e1.display();
console.log("----------------");
const e2 = new Employee("Rahul", 40000);
e2.display();