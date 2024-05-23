class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    public id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    public displayInfo(): void {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
}

// Create an instance of Student and call displayInfo
const student = new Student("John Doe", 12345);
student.displayInfo();
