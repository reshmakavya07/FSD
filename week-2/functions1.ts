// 1. Function with Return Type
function welcome(name: string): string {
    return `Welcome, ${name}!`;
}

// 2. Default Parameter
function getCollege(college: string = "SVECW"): string {
    return `College: ${college}`;
}

// 3. Optional Parameter
function studentInfo(id: number, branch?: string): void {
    console.log(`Student ID: ${id}`);
    if (branch) {
        console.log(`Branch: ${branch}`);
    }
}

// 4. Rest Parameter
function totalMarks(...marks: number[]): number {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

// Testing
console.log(welcome("Reshma"));
console.log(getCollege());
console.log(getCollege("JNTUK"));
studentInfo(101);
studentInfo(102, "AI&DS");
const total = totalMarks(80, 85, 90, 95);
console.log(`Total Marks: ${total}`);