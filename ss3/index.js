//bài 1
for (let i = 0; i <= 5; i++) {
    console.log(i); 
}

try {
    console.log(i);
} catch (error) {
    console.log("Biến i không tồn tại ngoài vòng lặp do được khai báo bằng let");
}
//bài 2
const number = 42;
const array = [1, 2, 3];

try {
    number = 100;
} catch (error) {
    console.log("Không thể gán lại giá trị cho biến số nguyên được khai báo bằng const:", error.message);
}

array.push(4);

console.log("Mảng sau khi thêm phần tử:", array);
//bài 3

const students = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' },
    { id: 3, name: 'Lê Văn C' },
    { id: 4, name: 'Phạm Thị D' },
    { id: 5, name: 'Hoàng Văn E' }
];

students.forEach(student => {
    console.log(`Xin chào, ${student.name}!`);
});
