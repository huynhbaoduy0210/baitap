"use strict";
// Bài tập : tạo ra 1 hàm truyền vào 2 đối số : nếu 2 đối số đều là number thì trả về tổng của
// Nếu cả 2 là chuỗi 
//còn nếu không thì in ra thông báo lỗi "không thể xác định kiểu"
function combineInputs(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    else {
        console.error("Không thể xác định kiểu");
    }
}
