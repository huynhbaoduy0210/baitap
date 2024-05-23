"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department ID: ${this.id}`);
        console.log(`Department Name: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(`Employees in ${this.name}:`);
        console.log(this.employees.join(', '));
    }
}
// Tạo thực thể từ lớp Department
const department = new Department(1, "Engineering");
// Thêm nhân viên vào phòng ban
department.addEmployee("Alice");
department.addEmployee("Bob");
// Gọi phương thức describe để in ra thông tin phòng ban
department.describe();
// Gọi phương thức printEmployees để in ra danh sách nhân viên
department.printEmployees();
