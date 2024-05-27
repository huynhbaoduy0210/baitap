// Định nghĩa abstract class Person
abstract class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}

// Định nghĩa lớp Student kế thừa từ Person
class Student extends Person {
    id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log(`Student Name: ${this.name}, Student ID: ${this.id}`);
    }
}

// Định nghĩa lớp Teacher kế thừa từ Person
class Teacher extends Person {
    subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}

// Khởi tạo đối tượng từ lớp Student và gọi phương thức displayInfo
const student = new Student("Alice", 12345);
student.displayInfo(); // Output: Student Name: Alice, Student ID: 12345

// Khởi tạo đối tượng từ lớp Teacher và gọi phương thức displayInfo
const teacher = new Teacher("Bob", "Mathematics");
teacher.displayInfo(); // Output: Teacher Name: Bob, Subject: Mathematics
