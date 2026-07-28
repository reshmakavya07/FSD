class Employees {
    public empName: string;
    private salary: number;
    protected department: string;

    constructor(empName: string, salary: number, department: string) {
        this.empName = empName;
        this.salary = salary;
        this.department = department;
    }

    public display(): void {
        console.log("Employee Name:", this.empName);
        console.log("Salary:", this.salary);
    }
}

class Company extends Employees {
    public showDepartment(): void {
        console.log("Department:", this.department);
    }
}

const c = new Company("Rahul", 50000, "IT");
c.display();
c.showDepartment();