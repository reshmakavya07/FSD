// 1. Traditional Function
function calculateSalary(salary: number, bonus: number): number {
    return salary + bonus;
}
// 2. Arrow Function
const calculateSalaryArrow = (salary: number, bonus: number): number => {
    return salary + bonus;
};
// 3. Shorthand Arrow Function
const welcomeEmployee = (name: string): string =>
    `Welcome ${name}!`;
// Testing
const salary = 30000;
const bonus = 5000;
console.log(welcomeEmployee("Reshma"));
const total1 = calculateSalary(salary, bonus);
console.log(`Traditional Salary: ${total1}`);
const total2 = calculateSalaryArrow(salary, bonus);
console.log(`Arrow Salary: ${total2}`);