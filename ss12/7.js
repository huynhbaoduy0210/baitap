"use strict";
// Định nghĩa lớp Account
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công.");
        }
        else {
            console.log("Mật khẩu không chính xác.");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công.");
        }
    }
}
// Định nghĩa lớp UserAcc kế thừa từ Account
class UserAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "active") {
            super.login(password);
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa.");
        }
    }
}
// Tạo đối tượng từ lớp UserAcc
const user1 = new UserAcc(1, "user1", "password1", "user", "active");
user1.login("password1"); // Output: Đăng nhập thành công.
user1.logout(); // Output: Đăng xuất thành công.
const user2 = new UserAcc(2, "user2", "password2", "user", "banned");
user2.login("password2"); // Output: Tài khoản đã bị khóa.
