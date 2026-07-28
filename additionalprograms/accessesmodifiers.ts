class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    public showDepartment(): void {
        console.log("Department:", this.department);
    }
}

const manager = new Manager("Rahul", 60000, "IT");

console.log("Employee Name:", manager.name);
manager.showDepartment();
manager.display();