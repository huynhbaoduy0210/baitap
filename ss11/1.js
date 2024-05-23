"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize, jobTitle) {
        super(name, company, phone);
        this.teamSize = teamSize;
        this.jobTitle = jobTitle;
    }
    printInfo() {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
        console.log(`Job Title: ${this.jobTitle}`);
    }
}
// Test the classes
const employee = new Employee("John Doe", "OpenAI", "123-456-7890");
employee.printInfo();
console.log("\n");
const manager = new Manager("Jane Smith", "OpenAI", "098-765-4321", 10, "Project Manager");
manager.printInfo();
