let numbers: number = 145;
let temp = numbers;
let sums = 0;

while (temp > 0) {
    let digit = temp % 10;

    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }

    sums += factorial;
    temp = Math.floor(temp / 10);
}

if (sums === numbers) {
    console.log(numbers + " is a Strong Number");
} else {
    console.log(numbers + " is not a Strong Number");
}