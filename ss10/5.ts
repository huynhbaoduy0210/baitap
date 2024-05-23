class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }

    public describe(): void {
        console.log(`Department ID: ${this.id}`);
        console.log(`Department Name: ${this.name}`);
    }

    public addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    public printEmployees(): void {
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
