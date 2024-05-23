class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getDescription(): void {
        console.log(`Product Name: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    public getDescription(): void {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}

// Create an instance of Electronics and call getDescription
const electronic = new Electronics("Smartphone", 699, "Samsung");
electronic.getDescription();
