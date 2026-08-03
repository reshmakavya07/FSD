let array: number[] = [10, 20, 30, 20, 40, 10, 50];

let duplicates: number[] = [];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j] && !duplicates.includes(array[i])) {
            duplicates.push(array[i]);
        }
    }
}

console.log("Duplicate Elements:", duplicates);