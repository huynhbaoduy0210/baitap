//bài 1
const students = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Trần Thị B' },
    { id: 3, name: 'Lê Văn C' },
    { id: 4, name: 'Phạm Thị D' },
    { id: 5, name: 'Hoàng Văn E' }
];

students.forEach(student => {
    console.log(student.name);
});
//bái 2
function hasUppercase(str) {
    const uppercasePattern = /[A-Z]/;
    return uppercasePattern.test(str);
}
console.log(hasUppercase("Hello")); 
console.log(hasUppercase("hello")); 
console.log(hasUppercase("HELLO")); 
console.log(hasUppercase("HeLLo123!"));
console.log(hasUppercase("")); 
console.log(hasUppercase("123!@#"));
 
//bài 3
function allPositiveNumbers(arr) {
  return arr.every(number => number > 0);
}

// Ví dụ về sử dụng hàm
console.log(allPositiveNumbers([2, 4, 6, 8, 10]));
console.log(allPositiveNumbers([2, 4, 6, -8, 10]));
console.log(allPositiveNumbers([1, 3, 5, 7, 9])); 
console.log(allPositiveNumbers([0, 2, 4, 6, 8])); 
console.log(allPositiveNumbers([])); 
console.log(allPositiveNumbers([-1, -2, -3]));

//bài 4
const employees = [
    {
        name: "Nguyễn Văn A",
        age: 21,
    },
    {
        name: "Nguyễn Văn B",
        age: 30,
    },
    {
        name: "Nguyễn Văn C",
        age: 19,
    }
];

function sortEmployee(arr, sortType) {
    if (sortType === "Increase") {
        return arr.sort((a, b) => a.age - b.age);
    } else if (sortType === "Decrease") {
        return arr.sort((a, b) => b.age - a.age);
    } else {
        throw new Error("Invalid sort type. Please use 'Increase' or 'Decrease'.");
    }
}

console.log(sortEmployee(employees, "Increase"));
console.log(sortEmployee(employees, "Decrease"));

