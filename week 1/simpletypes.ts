// Student Information
let StudentName: string = "Reshma";
let studentAge: number = 19;
let isPresent: boolean = true;
console.log("Type of studentName:", typeof studentName);
console.log("Type of studentAge:", typeof studentAge);
console.log("Type of isPresent:", typeof isPresent);
function studentDetails(name: string, age: number, present: boolean): void {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Present:", present ? "Yes" : "No");
}
studentDetails(studentName, studentAge, isPresent);