class Books {
    public title: string;
    private price: number;
    protected author: string;

    constructor(title: string, price: number, author: string) {
        this.title = title;
        this.price = price;
        this.author = author;
    }

    public displayBook(): void {
        console.log("Book Title:", this.title);
        console.log("Price:", this.price);
    }
}

class Library extends Books {
    public showAuthor(): void {
        console.log("Author:", this.author);
    }
}

const d = new Library("Python Basics", 650, "John Smith");
d.displayBook();
d.showAuthor();