var icon_eye = document.querySelector("i");
var username_input = document.querySelector('input[type="text"]');
var password_input = document.querySelector('input[type="password"]');
var email_input = document.querySelector('input[type="email"]');
var password_confirm = document.querySelector('#password-confirm');
var Form = document.querySelector('form');
var password_strong_level = document.querySelector('#password-strong-level');
var password_bar_level = document.querySelectorAll('span');
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var upper_regex = /[a-z]/g;
var lower_regex = /[A-Z]/g;
var num_regex = /[0-9]/g;
Form === null || Form === void 0 ? void 0 : Form.addEventListener('submit', function (event) {
    if ((username_input === null || username_input === void 0 ? void 0 : username_input.value.length) === 0 || (password_input === null || password_input === void 0 ? void 0 : password_input.value.length) === 0) {
        alert('Please enter your username or password');
    }
    else {
        if ((password_input === null || password_input === void 0 ? void 0 : password_input.value.length) < 9) {
            alert("Password is shorter than 8");
        }
        else {
            if ((password_input === null || password_input === void 0 ? void 0 : password_input.value) !== (password_confirm === null || password_confirm === void 0 ? void 0 : password_confirm.value)) {
                alert("Password not match");
            }
            else {
                if (email_input === null || email_input === void 0 ? void 0 : email_input.value.match(mailFormat)) {
                    alert("This form has submitted");
                    return;
                }
                else {
                    alert("Email format is valid");
                }
            }
        }
    }
    event.preventDefault();
});
password_input === null || password_input === void 0 ? void 0 : password_input.addEventListener('input', function (event) {
    if ((password_input === null || password_input === void 0 ? void 0 : password_input.value.length) > 0) {
        if ((password_input === null || password_input === void 0 ? void 0 : password_input.value.match(lower_regex)) && (password_input === null || password_input === void 0 ? void 0 : password_input.value.match(upper_regex)) && (password_input === null || password_input === void 0 ? void 0 : password_input.value.match(num_regex))) {
            for (var i = 0; i < 6; i++) {
                password_bar_level[i].style.backgroundColor = "green";
            }
        }
        if ((password_input === null || password_input === void 0 ? void 0 : password_input.value.match(lower_regex)) || (password_input === null || password_input === void 0 ? void 0 : password_input.value.match(upper_regex))) {
            for (var i = 0; i < 2; i++) {
                password_bar_level[i].style.backgroundColor = "red";
            }
        }
        if ((password_input === null || password_input === void 0 ? void 0 : password_input.value.match(lower_regex)) && (password_input === null || password_input === void 0 ? void 0 : password_input.value.match(upper_regex))) {
            for (var i = 0; i < 3; i++) {
                password_bar_level[i].style.backgroundColor = "yellow";
            }
        }
    }
    else {
        for (var i = 0; i < 6; i++) {
            password_bar_level[i].style.backgroundColor = "#333";
        }
    }
});
icon_eye === null || icon_eye === void 0 ? void 0 : icon_eye.addEventListener('click', function (event) {
    if (icon_eye.classList.contains('fa-eye')) {
        icon_eye.classList.replace('fa-eye', 'fa-eye-slash');
        password_input === null || password_input === void 0 ? void 0 : password_input.setAttribute('type', 'text');
        password_confirm === null || password_confirm === void 0 ? void 0 : password_confirm.setAttribute('type', 'text');
    }
    else {
        icon_eye.classList.replace('fa-eye-slash', 'fa-eye');
        password_input === null || password_input === void 0 ? void 0 : password_input.setAttribute('type', 'password');
        password_confirm === null || password_confirm === void 0 ? void 0 : password_confirm.setAttribute('type', 'password');
    }
});
