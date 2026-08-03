let arr: number[] = [1, 2, 3, 2, 4, 1, 2];
let frequencys: { [key: number]: number } = {};
for (let num of arr) {
    if (frequencys[num]) {
        frequencys[num]++;
    } else {
        frequencys[num] = 1;
    }
}

console.log(frequencys);