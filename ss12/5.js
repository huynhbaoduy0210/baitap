"use strict";
// Định nghĩa lớp abstract Quadrangle
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
// Định nghĩa lớp Rectangle kế thừa từ Quadrangle
class Rectangle extends Quadrangle {
    constructor(width, height) {
        super(width, height);
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Định nghĩa lớp Square kế thừa từ Quadrangle
class Square extends Quadrangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    calculatePerimeter() {
        return 4 * this.width;
    }
}
// Tạo thực thể từ lớp Rectangle và gọi phương thức calculatePerimeter
const rectangle = new Rectangle(5, 10);
console.log(`Chu vi của hình chữ nhật: ${rectangle.calculatePerimeter()}`); // Output: Chu vi của hình chữ nhật: 30
// Tạo thực thể từ lớp Square và gọi phương thức calculatePerimeter
const square = new Square(6);
console.log(`Chu vi của hình vuông: ${square.calculatePerimeter()}`); // Output: Chu vi của hình vuông: 24
