let texts: string = "programming";

let result = "";

for (let char of texts) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log("Original String:", texts);
console.log("After Removing Duplicates:", result);