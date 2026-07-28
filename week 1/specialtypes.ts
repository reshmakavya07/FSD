// 1. Using the 'any' type
let value: any = 100;
console.log("Value:", value);
value = "Welcome";
console.log("String:", value);
value = false;
console.log("Boolean:", value);
function showValue(data: any): void {
    console.log("Current Value:", data);
}
showValue(value);


// 2. Using the 'unknown' type

let input: unknown = "TypeScript Lab";

if (typeof input === "string") {
    console.log("Length:", input.length);
}

input = 250;

if (typeof input === "number") {
    console.log("Square:", input * input);
}



// 3. Using the 'void' type

function displayMessage(message: string): void {
    console.log("Message:", message);
}

function greet(name: string): void {
    console.log("Welcome", name);
}

displayMessage("TypeScript Experiment");
greet("Reshma");