// 1. Traditional Function
function calculateDiscount(price: number, discount: number): number {
    return price - discount;
}
// 2. Arrow Function
const calculateDiscountArrow = (price: number, discount: number): number => {
    return price - discount;
};
// 3. Shorthand Arrow Function
const productMessage = (product: string): string =>
    `Product: ${product}`;
// Testing
const price = 5000;
const discount = 500;
console.log(productMessage("Laptop"));
const finalPrice1 = calculateDiscount(price, discount);
console.log(`Traditional Price: ${finalPrice1}`);
const finalPrice2 = calculateDiscountArrow(price, discount);
console.log(`Arrow Price: ${finalPrice2}`);