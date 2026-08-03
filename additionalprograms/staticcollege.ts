class Students {
    name: string;
    static collegeName: string = "Shri Vishnu Engineering College for Women";

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Student Name:", this.name);
    }

    static displayCollege(): void {
        console.log("College Name:", Students.collegeName);
    }
}

let student1 = new Students("Reshma");
let student2 = new Students("Kavya");

student1.display();
student2.display();

Students.displayCollege();