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
    document.querySelector('#signUpForm').addEventListener('submit', function(event) {
        let isValid = true;

        // Validate Username
        const username = document.querySelector('#regUname').value;
        const errUname = document.querySelector('#errRegUname');
        if (username.trim() === "") {
            errUname.textContent = "Username is required.";
            isValid = false;
        } else {
            errUname.textContent = "";
        }

        // Validate Email
        const email = document.querySelector('#regEmail').value;
        const errEmail = document.querySelector('#errEmail');
        if (email.trim() === "") {
            errEmail.textContent = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) { // Simple email format validation
            errEmail.textContent = "Please enter a valid email.";
            isValid = false;
        } else {
            errEmail.textContent = "";
        }

        // Validate Contact Number (simple non-empty check, you might want to add format validation)
        const contact = document.querySelector('#regContact').value;
        const errContact = document.querySelector('#errContact');
        if (contact.trim() === "") {
            errContact.textContent = "Contact number is required.";
            isValid = false;
        } else {
            errContact.textContent = "";
        }

        // Validate Address
        const address = document.querySelector('#regAddress').value;
        const errAddress = document.querySelector('#errAddress');
        if (address.trim() === "") {
            errAddress.textContent = "Address is required.";
            isValid = false;
        } else {
            errAddress.textContent = "";
        }

        // Validate Password
        const password = document.querySelector('#regPw').value;
        const errPw = document.querySelector('#errRegPw');
        if (password.trim() === "") {
            errPw.textContent = "Password is required.";
            isValid = false;
        } else {
            errPw.textContent = "";
        }

        // Validate Confirm Password
        const confirmPassword = document.querySelector('#regCofirmPw').value;
        const errConfirmPw = document.querySelector('#errConfirmPw');
        if (confirmPassword.trim() === "") {
            errConfirmPw.textContent = "Confirming password is required.";
            isValid = false;
        } else if (password !== confirmPassword) {
            errConfirmPw.textContent = "Passwords do not match.";
            isValid = false;
        } else {
            errConfirmPw.textContent = "";
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});

// Function to display placeholder error message
const displayPlaceholderError = (inputElement, message) => {
    inputElement.setAttribute('data-placeholder', inputElement.getAttribute('placeholder'));
    inputElement.placeholder = message;
    inputElement.classList.add('error');
	inputElement.style.color = 'red';
	
}

// Function to hide placeholder error message
const hidePlaceholderError = (inputElement) => {
    inputElement.placeholder = inputElement.getAttribute('data-placeholder');
    inputElement.classList.remove('error');
}

            //************************ VALIDATE FORM SIGN UP ************************

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('#signUpForm').addEventListener('submit', validateFormSignUp);
// });

// function validateFormSignUp(event) {
//     let isValid = true;

//     // Validate username
//     const username = document.querySelector('#regUname').value;
//     const errUname = document.querySelector('#errRegUname');
//     if (username === "") {
//         errUname.textContent = "* Username is required.";
//         isValid = false;
//     } else {
//         errUname.textContent = "";
//     }

//     // Validate password
//     const password = document.querySelector('#regPw').value;
//     const errPw = document.querySelector('#errRegPw');
//     if (password === "") {
//         errPw.textContent = "* Password is required.";
//         isValid = false;
//     } else {
//         errPw.textContent = "";
//     }

//     // Prevent form submission if validation fails
//     if (!isValid) {
//         event.preventDefault();
//     }
// }
