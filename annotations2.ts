// 1. Variable Annotations
let bookTitle: string = "Python Programming";
let publishYear: number = 2024;
let isAvailable: boolean = true;

// 2. Function Annotation
function getBookInfo(title: string, year: number): string {
    return `${title} was published in ${year}.`;
}

// 3. Array Annotation
let authors: string[] = ["Guido", "John", "David"];

// 4. Using Variables and Function
const details: string = getBookInfo(bookTitle, publishYear);
console.log(details);
console.log(`Authors: ${authors.join(", ")}`);
console.log(`Available: ${isAvailable ? "Yes" : "No"}`);
/*
Type Safety Check
publishYear = "2024"; // Error
*/