let arra: number[] = [1, 2, 3, 5];
let n = 5;

let expectedSum = (n * (n + 1)) / 2;

let actualSum = 0;

for (let num of arra) {
    actualSum += num;
}

console.log("Missing Number:", expectedSum - actualSum);