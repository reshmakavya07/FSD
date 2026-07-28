class Student {
    studentName: string;
    rollNo: number;
    marks: number;
    constructor(name?: string, roll?: number, marks?: number) {
        this.studentName = name || "Unknown";
        this.rollNo = roll || 0;
        this.marks = marks || 0;
    }
    getGrade(): string {
        if (this.marks >= 90) return "A";
        else if (this.marks >= 75) return "B";
        else if (this.marks >= 50) return "C";
        else return "Fail";
    }
    display(): void {
        console.log("Student Name:", this.studentName);
        console.log("Roll No:", this.rollNo);
        console.log("Marks:", this.marks);
        console.log("Grade:", this.getGrade());
    }
}
const s1 = new Student();
s1.display();
console.log("----------------");
const s2 = new Student("Reshma", 101, 92);
s2.display();