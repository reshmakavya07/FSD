// Product Details
let productName: string = "Laptop";
let price: number = 55000;
let inStock: boolean = true;
console.log("Type of productName:", typeof productName);
console.log("Type of price:", typeof price);
console.log("Type of inStock:", typeof inStock);
function productInfo(name: string, price: number, stock: boolean): void {
    console.log("Product:", name);
    console.log("Price:", price);
    console.log("Stock:", stock ? "Available" : "Out of Stock");
}
productInfo(productName, price, inStock);