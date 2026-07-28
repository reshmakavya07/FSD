class Vehicle {
    public brand: string;
    private price: number;
    protected model: string;
    constructor(brand: string, price: number, model: string) {
        this.brand = brand;
        this.price = price;
        this.model = model;
    }
    public displayVehicle(): void {
        console.log("Brand:", this.brand);
        console.log("Price:", this.price);
    }
}
class Car extends Vehicle {
    public showModel(): void {
        console.log("Model:", this.model);
    }
}

const c1 = new Car("Toyota", 1200000, "Innova");
c1.displayVehicle();
c1.showModel();