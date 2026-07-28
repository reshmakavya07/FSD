class Book {
    title: string;
    author: string;
    price: number;
    constructor(title?: string, author?: string, price?: number) {
        this.title = title || "Unknown Book";
        this.author = author || "Unknown Author";
        this.price = price || 0;
    }
    display(): void {
        console.log("Book Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    }
}
const b1 = new Book();
b1.display();
console.log("----------------");
const b2 = new Book("Python Programming", "John", 650);
b2.display();