const validateForm = (event) => {
    event.preventDefault();
    let us = event.target.username.value
    let ps = event.target.password.value
    let msg = document.getElementById("message")
    if (us === "" && ps === "") {
        msg.innerText = "please enter username and password"
        msg.style.color = "red";
    } else if (us === "") {
        msg.innerText = "please enter username"
        msg.style.color = "red";
    } else if (ps === "") {
        msg.innerText = "please enter password"
        msg.style.color = "red";
    } else {
        msg.innerText = "LogIn successfull"
        msg.style.color = "green";
    }
}
function showPassword() {
    let pwd = document.getElementById("password");
    if (pwd.type === "password") {
        pwd.type = "text";
    } else {
        pwd.type = "password";
    }
}