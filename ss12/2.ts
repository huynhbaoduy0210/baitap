// Abstract class Vehicle
abstract class Vehicle {
    name: string;
    speed: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    abstract move(): void;

    printDetails(): void {
        console.log(`${this.name} is moving at ${this.speed} km/h`);
    }
}

// Class Car kế thừa từ Vehicle
class Car extends Vehicle {
    move(): void {
        console.log("Car is driving");
    }
}

// Class Bike kế thừa từ Vehicle
class Bike extends Vehicle {
    move(): void {
        console.log("Bike is riding");
    }
}

// Tạo đối tượng từ lớp Car và Bike
const car = new Car("Toyota", 120);
const bike = new Bike("Honda", 80);

car.printDetails();  // Output: Toyota is moving at 120 km/h
car.move();          // Output: Car is driving

bike.printDetails(); // Output: Honda is moving at 80 km/h
bike.move();         // Output: Bike is riding

// Class Person
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Tạo đối tượng từ class Person
const person = new Person("John", 30);
person.greet();  // Output: Hello, my name is John and I am 30 years old.
