let ar: number[] = [1, 2, 3, 4, 5];
let t = 2;

let rotated = [...ar.slice(t), ...ar.slice(0, t)];

console.log("Rotated Array:", rotated);