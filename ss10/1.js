"use strict";
//bai 1
class vehicle1 {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
// Tạo thực thể từ lớp Vehicle
const vehicle1 = new vehicle1("Civic", 2020, "Honda");
const vehicle2 = new vehicle1("Model S", 2022, "Tesla");
// Truy cập và in ra thông tin của từng thuộc tính
console.log(`Vehicle 1: Name - ${vehicle1.name}, Year - ${vehicle1.year}, Company - ${vehicle1.company}`);
console.log(`Vehicle 2: Name - ${vehicle2.name}, Year - ${vehicle2.year}, Company - ${vehicle1.company}`);
