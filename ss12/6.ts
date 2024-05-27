// Định nghĩa lớp Employee
class Employee {
    protected name: string;
    protected role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    calculateSalary(): number {
        return 0; // Phương thức này sẽ được ghi đè bởi các lớp con
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Role: ${this.role}, Salary: ${this.calculateSalary()}`);
    }
}

// Định nghĩa lớp internEmployee kế thừa từ Employee
class InternEmployee extends Employee {
    private workHour: number;

    constructor(name: string, role: string, workHour: number) {
        super(name, role);
        this.workHour = workHour;
    }

    calculateSalary(): number {
        return 30000 * this.workHour;
    }
}

// Định nghĩa lớp officialEmployee kế thừa từ Employee
class OfficialEmployee extends Employee {
    private overtimeWage: number;

    constructor(name: string, role: string, overtimeWage: number) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }

    calculateSalary(): number {
        return 20000000 + this.overtimeWage;
    }
}

// Khởi tạo đối tượng từ lớp InternEmployee và gọi phương thức displayInfo
const intern = new InternEmployee("Alice", "Intern", 160);
intern.displayInfo(); // Output: Name: Alice, Role: Intern, Salary: 4800000

// Khởi tạo đối tượng từ lớp OfficialEmployee và gọi phương thức displayInfo
const official = new OfficialEmployee("Bob", "Official", 5000000);
official.displayInfo(); // Output: Name: Bob, Role: Official, Salary: 25000000
