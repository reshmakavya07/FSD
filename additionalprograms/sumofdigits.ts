let number1: number = 12345;
let sum1 = 0;

while (number1 > 0) {
    sum1 += number1 % 10;
    number1 = Math.floor(number1 / 10);
}

console.log("Sum of digits =", sum1);