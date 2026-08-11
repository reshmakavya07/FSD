namespace Student {
    export function getDetails(name: string, rollNo: number): string {
        return `Name: ${name}, Roll No: ${rollNo}`;
    }

    export function getMarks(mark: number): string {
        return `Marks: ${mark}`;
    }
}
console.log(Student.getDetails("Vineela", 101));
console.log(Student.getMarks(95));



namespace Bank {

    export function deposit(amount: number): string {
        return `Deposited: ₹${amount}`;
    }

    export function balance(amount: number): string {
        return `Balance: ₹${amount}`;
    }
}

console.log(Bank.deposit(5000));
console.log(Bank.balance(12000));



namespace MovieTicket {

    export function bookTicket(name: string): string {
        return `Ticket booked for ${name}`;
    }

    export function ticketPrice(price: number): string {
        return `Ticket Price: ₹${price}`;
    }
}

console.log(MovieTicket.bookTicket("Sai"));
console.log(MovieTicket.ticketPrice(250));