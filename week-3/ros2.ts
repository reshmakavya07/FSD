class Bookes {
    public title: string = "Python Basics";
    private price: number = 650;
    protected author: string = "John Smith";

    public display(): void {
        console.log("Book Title:", this.title);
        console.log("Price:", this.price);
    }
}

class Librarys extends Bookes {
    public showAuthor(): void {
        console.log("Author:", this.author);
    }
}

const b = new Librarys();
b.display();
b.showAuthor();