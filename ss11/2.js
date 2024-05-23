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
    // Method to access private phone attribute for subclasses
    getPhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize, jobTitle) {
        super(name, company, phone);
        this.teamSize = teamSize;
        this.jobTitle = jobTitle;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.getPhone()}`);
        console.log(`Team Size: ${this.teamSize}`);
        console.log(`Job Title: ${this.jobTitle}`);
    }
}
// Create an instance of Manager and call printInfo
const manager = new Manager("Jane Smith", "OpenAI", "098-765-4321", 10, "Project Manager");
manager.printInfo();
