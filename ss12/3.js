"use strict";
// Định nghĩa abstract class Person
class Person {
    constructor(name) {
        this.name = name;
    }
}
// Định nghĩa lớp Student kế thừa từ Person
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Student Name: ${this.name}, Student ID: ${this.id}`);
    }
}
// Định nghĩa lớp Teacher kế thừa từ Person
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Teacher Name: ${this.name}, Subject: ${this.subject}`);
    }
}
// Khởi tạo đối tượng từ lớp Student và gọi phương thức displayInfo
const student = new Student("Alice", 12345);
student.displayInfo(); // Output: Student Name: Alice, Student ID: 12345
// Khởi tạo đối tượng từ lớp Teacher và gọi phương thức displayInfo
const teacher = new Teacher("Bob", "Mathematics");
teacher.displayInfo(); // Output: Teacher Name: Bob, Subject: Mathematics
