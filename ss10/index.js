"use strict";
//bai 1
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
// Tạo thực thể từ lớp Vehicle
const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Model S", 2022, "Tesla");
// Truy cập và in ra thông tin của từng thuộc tính
console.log(`Vehicle 1: Name - ${vehicle1.name}, Year - ${vehicle1.year}, Company - ${vehicle1.company}`);
console.log(`Vehicle 2: Name - ${vehicle2.name}, Year - ${vehicle2.year}, Company - ${vehicle2.company}`);
//bai 2
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const students = [];
const student1 = new Student(1, 20, "student1@example.com");
const student2 = new Student(2, 22, "student2@example.com");
const student3 = new Student(3, 21, "student3@example.com");
students.push(student1, student2, student3);
students.forEach(student => {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});
//bai 3
