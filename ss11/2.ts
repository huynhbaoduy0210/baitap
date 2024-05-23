class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    public printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }

    // Method to access private phone attribute for subclasses
    protected getPhone(): string {
        return this.phone;
    }
}

class Manager extends Employee {
    public teamSize: number;
    public jobTitle: string;

    constructor(name: string, company: string, phone: string, teamSize: number, jobTitle: string) {
        super(name, company, phone);
        this.teamSize = teamSize;
        this.jobTitle = jobTitle;
    }

    public printInfo(): void {
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
