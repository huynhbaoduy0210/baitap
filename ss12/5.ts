// Định nghĩa lớp abstract Quadrangle
abstract class Quadrangle {
    protected width: number;
    protected height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    abstract calculatePerimeter(): number;
}

// Định nghĩa lớp Rectangle kế thừa từ Quadrangle
class Rectangle extends Quadrangle {
    constructor(width: number, height: number) {
        super(width, height);
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Định nghĩa lớp Square kế thừa từ Quadrangle
class Square extends Quadrangle {
    constructor(sideLength: number) {
        super(sideLength, sideLength);
    }

    calculatePerimeter(): number {
        return 4 * this.width;
    }
}

// Tạo thực thể từ lớp Rectangle và gọi phương thức calculatePerimeter
const rectangle = new Rectangle(5, 10);
console.log(`Chu vi của hình chữ nhật: ${rectangle.calculatePerimeter()}`); // Output: Chu vi của hình chữ nhật: 30

// Tạo thực thể từ lớp Square và gọi phương thức calculatePerimeter
const square = new Square(6);
console.log(`Chu vi của hình vuông: ${square.calculatePerimeter()}`); // Output: Chu vi của hình vuông: 24
