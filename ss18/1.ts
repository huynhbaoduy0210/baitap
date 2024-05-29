// Tạo hàm decorator
function logFunction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    // Thay thế phương thức gốc bằng một phương thức mới
    descriptor.value = function (...args: any[]) {
        // Log tên hàm
        console.log(`Function name: ${propertyKey}`);

        // Log tham số đầu vào
        console.log(`Arguments: ${JSON.stringify(args)}`);

        // Gọi hàm gốc và lấy kết quả
        const result = originalMethod.apply(this, args);

        // Log kết quả trả về
        console.log(`Result: ${result}`);

        // Trả về kết quả
        return result;
    };

    return descriptor;
}

// Sử dụng decorator cho một class method
class Example {
    @logFunction
    sum(a: number, b: number): number {
        return a + b;
    }

    @logFunction
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}

// Tạo instance của class Example và gọi các phương thức
const example = new Example();
example.sum(2, 3); // Function name: sum, Arguments: [2,3], Result: 5
example.greet('World'); // Function name: greet, Arguments: ["World"], Result: "Hello, World!"
