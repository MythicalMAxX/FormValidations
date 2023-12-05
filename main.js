function yes(node1) {
    node1.innerHTML = "✓";
    node1.style.color = "green";
    // checkAllValidations()
}

function no(node1) {
    node1.innerHTML = "✗";
    node1.style.color = "red";
}


function checkPasswords() {
    var pwd = document.getElementsByName("password")[0].value;
    var retypepwd = document.getElementsByName("retype-password")[0].value;
    var span = document.getElementById("retypePasswordError");
    if (pwd === retypepwd) {
        yes(span);
    } else {
        no(span);
    }
}

function validateAge() {
    var age = document.getElementsByName("age")[0].value;
    var span = document.getElementById("ageError");
    if (age >= 0 && age <= 120) {
        yes(span);
    } else {
        no(span);
    }
}

function validateMobileNumber() {
    var mobileNumber = document.getElementsByName('mobile')[0].value;
    var regex = /^[0-9]{10}$/;
    var span = document.getElementById("mobileError");
    if (regex.test(mobileNumber)) {
        yes(span);
    } else {
        no(span);
    }
}

function validatePassword() {
    var password = document.getElementsByName('password')[0].value;
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+=\-{}[\]|:;'<>,.?\/])(?!.*\s).{8,}$/;
    var span = document.getElementById("passwordError");
    if (regex.test(password)) {
        yes(span);
    } else {
        no(span);
    }
}

function validateEmail() {
    var email = document.getElementsByName("email")[0].value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var span = document.getElementById("emailError");
    if (pattern.test(email)) {
        yes(span);
    } else {
        no(span);
    }
}

function checkNameValidity() {
    const name = document.getElementsByName('name')[0].value;
    const regex = /^[a-zA-Z ]{1,30}$/;
    var span = document.getElementById("nameError");
    if (regex.test(name)) {
        yes(span);
    } else {
        no(span);
    }
}
function checkAllValidations() {
    var nameValid = checkNameValidity();
    var mobileValid = validateMobileNumber();
    var emailValid = validateEmail();
    var passwordValid = validatePassword();
    var retypePasswordValid = checkPasswords();
    var ageValid = validateAge();

    if (nameValid && mobileValid && emailValid && passwordValid && retypePasswordValid && ageValid) {
        document.getElementById("submit").style.display = "block";
    } else {
        document.getElementById("submit").style.display = "none";
    }
}