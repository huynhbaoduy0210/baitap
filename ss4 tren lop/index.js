//bai 1
function sum(arr) {
    let total = 0;  // Khởi tạo biến tổng bằng 0
    for (const num of arr) {  // Sử dụng vòng lặp for...of để duyệt qua từng phần tử trong mảng
        if (num % 2 === 0) {  // Kiểm tra xem phần tử có phải là số chẵn hay không
            total += num;  // Nếu là số chẵn, thêm giá trị của nó vào tổng
        }
    }
    return total;  // Trả về tổng cuối cùng
}

// Ví dụ sử dụng hàm:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(numbers));  // Kết quả sẽ là 12
//bai 2
function greetingWithWeather(name, weather) {
    let greeting;

    // Kiểm tra tham số weather và xử lý tương ứng
    if (weather === "sunny") {
        greeting = `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
    } else if (weather === "rainy") {
        greeting = `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`;
    } else {
        greeting = `Chào ${name}! Hôm nay thời tiết không xác định.`;
    }

    return greeting;  // Trả về chuỗi chào
}

// Ví dụ sử dụng hàm:
console.log(greetingWithWeather("Duy", "sunny"));  // "Chào Huy! Hôm nay trời nắng tuyệt vời!"
console.log(greetingWithWeather("Thuong", "rainy"));  // "Chào Lan! Hôm nay trời mưa, hãy mang theo ô!"
console.log(greetingWithWeather("Minh", "cloudy"));  // "Chào Minh! Hôm nay thời tiết không xác định."
//bai3 
function typeConsole(type = "log") {
    const message = `Đây là type: ${type}`;
    
    // Sử dụng switch để gọi phương thức tương ứng của console
    switch (type) {
        case "log":
            console.log(message);
            break;
        case "warn":
            console.warn(message);
            break;
        case "error":
            console.error(message);
            break;
        default:
            console.log(`Type không hợp lệ: ${type}`);
    }
}

// Ví dụ sử dụng hàm:
typeConsole();          // Mặc định: "Đây là type: log"
typeConsole("log");     // "Đây là type: log"
typeConsole("warn");    // "Đây là type: warn"
typeConsole("error");   // "Đây là type: error"
typeConsole("info");    // "Type không hợp lệ: info"
//bai 4
function checkElement(arr, value) {
    // Sử dụng phương thức includes() để kiểm tra xem giá trị có tồn tại trong mảng hay không
    return arr.includes(value);
}

// Ví dụ sử dụng hàm:
console.log(checkElement([1, 2, 3, 4, 5], 3));  // Kết quả sẽ là true
console.log(checkElement([1, 2, 3, 4, 5], 6));  // Kết quả sẽ là false
console.log(checkElement(["apple", "banana", "cherry"], "banana"));  // Kết quả sẽ là true
console.log(checkElement(["apple", "banana", "cherry"], "grape"));  // Kết quả sẽ là false

//bai 7
let phoneBooks = [];

function addContact(name, phone, email) {
    let contact = {
        name: name,
        phone: phone,
        email: email
    };

    phoneBooks.push(contact);
}

function displayContact() {
    if (phoneBooks.length === 0) {
        console.log("Danh bạ trống.");
        return;
    }

    phoneBooks.forEach((contact, index) => {
        console.log(`Liên hệ ${index + 1}:`);
        console.log(`Tên: ${contact.name}`);
        console.log(`Số điện thoại: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
        
    });
}

addContact("Nguyễn Văn A", "0123456789", "a.nguyen@example.com");
addContact("Trần Thị B", "0987654321", "b.tran@example.com");
displayContact();
