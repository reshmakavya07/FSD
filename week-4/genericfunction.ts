function getValue<T>(item: T): T {
    return item;
}

console.log(getValue<number>(100));



function fetchFirst<T>(data: T[]): T {
    return data[0];
}

console.log(fetchFirst<string>(["Apple", "Orange"]));


function packItem<T>(value: T) {
    return {
        item: value
    };
}

console.log(packItem<boolean>(true));