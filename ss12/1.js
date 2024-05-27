"use strict";
// Định nghĩa abstract class Animal
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
// Định nghĩa lớp Cat kế thừa từ Animal
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
// Định nghĩa lớp Dog kế thừa từ Animal
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
// Tạo đối tượng từ lớp Cat và Dog
const cat = new Cat("Kitty");
const dog = new Dog("Buddy");
// Gọi phương thức printName và makeNoise với mỗi đối tượng
cat.printName(); // Kết quả: Kitty
cat.makeNoise(); // Kết quả: meo meo
dog.printName(); // Kết quả: Buddy
dog.makeNoise(); // Kết quả: gâu gâu
