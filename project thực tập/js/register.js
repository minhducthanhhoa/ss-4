let users = JSON.parse(localStorage.getItem("users")) || [];
// localStorage.setItem("accountList", JSON.stringify(accountList));
function signUp(e) {
    e.preventDefault();
    let firstName = document.getElementById("inpFirstName").value;
    let lastName = document.getElementById("inpLastName").value;
    let email = document.getElementById("inpEmail").value;
    let password = document.getElementById("inpPassword").value;
    let check = document.getElementById("check-box").checked;
    let obj = {
        id: Math.floor(Math.random() * 10000000),
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        emailAddress: `${email}`,
        password: `${password}`,
        receive: `${check}`,
        cart: []
    }
    let flag = true;
    for (let i = 0; i < users.length; i++) {
        if (email == users[i].emailAddress) {
            alert("email đã được sử dụng");
            flag = false;
            break;
        }
    }
    if (flag == true) {
        users.push(obj);
        alert("Đăng kí thành công11111!");
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "../pages/login.html";
    }
}