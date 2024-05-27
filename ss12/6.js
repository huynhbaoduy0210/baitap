"use strict";
// Định nghĩa lớp Employee
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    calculateSalary() {
        return 0; // Phương thức này sẽ được ghi đè bởi các lớp con
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Role: ${this.role}, Salary: ${this.calculateSalary()}`);
    }
}
// Định nghĩa lớp internEmployee kế thừa từ Employee
class InternEmployee extends Employee {
    constructor(name, role, workHour) {
        super(name, role);
        this.workHour = workHour;
    }
    calculateSalary() {
        return 30000 * this.workHour;
    }
}
// Định nghĩa lớp officialEmployee kế thừa từ Employee
class OfficialEmployee extends Employee {
    constructor(name, role, overtimeWage) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 20000000 + this.overtimeWage;
    }
}
// Khởi tạo đối tượng từ lớp InternEmployee và gọi phương thức displayInfo
const intern = new InternEmployee("Alice", "Intern", 160);
intern.displayInfo(); // Output: Name: Alice, Role: Intern, Salary: 4800000
// Khởi tạo đối tượng từ lớp OfficialEmployee và gọi phương thức displayInfo
const official = new OfficialEmployee("Bob", "Official", 5000000);
official.displayInfo(); // Output: Name: Bob, Role: Official, Salary: 25000000
