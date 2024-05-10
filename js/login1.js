let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

            //************** */ function for validate login form *****************
            
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#loginForm').addEventListener('submit', validateForm);
});

function validateForm(event) {
    let isValid = true;

    // Validate username
    const username = document.querySelector('#uname').value;
    const errUname = document.querySelector('#errUname');
    if (username === "") {
        errUname.textContent = "* Username is required.";
        isValid = false;
    } else {
        errUname.textContent = "";
    }

    // Validate password
    const password = document.querySelector('#password').value;
    const errPw = document.querySelector('#errPw');
    if (password === "") {
        errPw.textContent = "* Password is required.";
        isValid = false;
    } else {
        errPw.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
}

                //************** */ function for validate sign up form ******************

document.addEventListener('DOMContentLoaded', function() {
    // Validate Username
    const username = document.querySelector('#regUname');
    const errUname = document.querySelector('#errRegUname');
    username.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            errUname.textContent = "* Username is required.";
            isValid = false;
        } else {
            errUname.textContent = "";
        }
    });

    // Validate Email
    const email = document.querySelector('#regEmail');
    const errEmail = document.querySelector('#errEmail');
    email.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            errEmail.textContent = "* Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(event.target.value)) { // Simple email format validation
            errEmail.textContent = "* Please enter a valid email.";
            isValid = false;
        } else {
            errEmail.textContent = "";
        }
    });

    // Validate Contact Number
    const contact = document.querySelector('#regContact');
    const errContact = document.querySelector('#errContact');
    const contactRegex = /^\d{10}$/; // Validates 10-digit contact numbers
    contact.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            // console.log(typeof event.target.value);
            errContact.textContent = "* Contact number is required.";
            isValid = false;
        } else if (!contactRegex.test(event.target.value)) {
            errContact.textContent = "* Please enter a valid contact number.";
            isValid = false;
        } else {
            errContact.textContent = "";
        }
    });

    // Validate Address
    const address = document.querySelector('#regAddress');
    const errAddress = document.querySelector('#errAddress');
    address.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            errAddress.textContent = "* Address is required.";
            isValid = false;
        } else {
            errAddress.textContent = "";
        }
    });

    // Validate Password
    const password = document.querySelector('#regPw');
    const errPw = document.querySelector('#errRegPw');
    password.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            errPw.textContent = "* Password is required.";
            isValid = false;
        } else {
            errPw.textContent = "";
        }
    });

    // Validate Confirm Password
    const confirmPassword = document.querySelector('#regCofirmPw');
    const errConfirmPw = document.querySelector('#errConfirmPw');
    confirmPassword.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            errConfirmPw.textContent = "* Confirming password is required.";
            isValid = false;
        } else if (password.value !== event.target.value) {
            errConfirmPw.textContent = "* Passwords do not match.";
            isValid = false;
        } else {
            errConfirmPw.textContent = "";
        }
    });

    let isValid = true;

    // Prevent form submission if validation fails
    document.querySelector('#signUpForm').addEventListener('submit', function(event) {
        if (isValid) {
            event.preventDefault();
        }
    });
});