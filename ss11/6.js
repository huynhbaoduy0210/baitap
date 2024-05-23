"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
// Create an instance of Electronics and call getDescription
const electronic = new Electronics("Smartphone", 699, "Samsung");
electronic.getDescription();
