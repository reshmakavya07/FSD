// 1. Variable Annotations
let studentName: string = "Reshma";
let rollNo: number = 101;
let isPassed: boolean = true;
// 2. Function Annotation
function getStudentResult(name: string, roll: number): string {
    return `${name} with Roll No ${roll} has completed the course.`;
}

// 3. Array Annotation
let subjects: string[] = ["Java", "Python", "TypeScript", "AI"];

// 4. Using Variables and Function
const result: string = getStudentResult(studentName, rollNo);
console.log(result);
console.log(`Subjects: ${subjects.join(", ")}`);
console.log(`Passed: ${isPassed ? "Yes" : "No"}`);
/*
Type Safety Check
studentName = 123; // Error
*/