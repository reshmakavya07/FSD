class Box<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }
    showValue(): T {
        return this.value;
    }
}
let studentName = new Box<string>("Vineela");
console.log(studentName.showValue());
class Wallet<T> {
    private money: T;
    constructor(money: T) {
        this.money = money;
    }
    displayMoney(): T {
        return this.money;
    }
}
let balance = new Wallet<number>(2500);
console.log(balance.displayMoney());
interface Laptop {
    brand: string;
    price: number;
}
class Store<T> {
    private product: T;
    constructor(product: T) {
        this.product = product;
    }
    getProduct(): T {
        return this.product;
    }
}
let laptop = new Store<Laptop>({
    brand: "HP",
    price: 65000
});
console.log(laptop.getProduct());