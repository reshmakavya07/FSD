// 1. Traditional Function
function calculateMarks(mark1: number, mark2: number): number {
    return mark1 + mark2;
}
// 2. Arrow Function
const calculateMarksArrow = (mark1: number, mark2: number): number => {
    return mark1 + mark2;
};
// 3. Shorthand Arrow Function
const greetStudent = (name: string): string =>
    `Hello ${name}!`;
// Testing
console.log(greetStudent("Anu"));
const totalv = calculateMarks(85, 90);
console.log(`Traditional Total: ${totalv}`);
const totaln = calculateMarksArrow(85, 90);
console.log(`Arrow Total: ${totaln}`);