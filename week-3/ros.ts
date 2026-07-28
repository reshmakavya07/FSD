class Vehicles {
    public brand: string = "Toyota";
    private price: number = 1200000;
    protected model: string = "Innova";

    public display(): void {
        console.log("Brand:", this.brand);
        console.log("Price:", this.price);
    }
}

class Cars extends Vehicles {
    public showModel(): void {
        console.log("Model:", this.model);
    }
}

const n = new Cars();
n.display();
n.showModel();