"use strict";
// 1. Variable Annotations
let bookTitle = "Python Programming";
let publishYear = 2024;
let isAvailable = true;
// 2. Function Annotation
function getBookInfo(title, year) {
    return `${title} was published in ${year}.`;
}
// 3. Array Annotation
let authors = ["Guido", "John", "David"];
// 4. Using Variables and Function
const details = getBookInfo(bookTitle, publishYear);
console.log(details);
console.log(`Authors: ${authors.join(", ")}`);
console.log(`Available: ${isAvailable ? "Yes" : "No"}`);
/*
Type Safety Check
publishYear = "2024"; // Error
*/ 
