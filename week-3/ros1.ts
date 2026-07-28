class Employeeid {
    public empName: string = "Rahul";
    private salary: number = 50000;
    protected department: string = "IT";
    public display(): void {
        console.log("Employee Name:", this.empName);
        console.log("Salary:", this.salary);
    }
}
class Office extends Employeeid {
    public showDepartment(): void {
        console.log("Department:", this.department);
    }
}
const e = new Office();
e.display();
e.showDepartment();