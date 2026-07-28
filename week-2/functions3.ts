// 1. Function with Return Type
function greetCustomer(name: string): string {
    return `Hi ${name}, Welcome!`;
}

// 2. Default Parameter
function getCity(city: string = "Hyderabad"): string {
    return `Delivery City: ${city}`;
}

// 3. Optional Parameter
function orderDetails(orderId: number, item?: string): void {
    console.log(`Order ID: ${orderId}`);
    if (item) {
        console.log(`Item: ${item}`);
    }
}

// 4. Rest Parameter
function totalPrice(...prices: number[]): number {
    return prices.reduce((sum, price) => sum + price, 0);
}

// Testing
console.log(greetCustomer("Anu"));
console.log(getCity());
console.log(getCity("Vijayawada"));

orderDetails(5001);
orderDetails(5002, "Laptop");

console.log(`Total Price: ${totalPrice(500, 1000, 1500)}`);