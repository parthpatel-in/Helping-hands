/*
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.RegistrationOfSp').addEventListener('submit',validateForm);
});

function validateForm(event) {
    isValid = true;

    let uname = document.querySelector('.uname').value;
    let errUname = document.querySelector('.errUname');
    
    uname.addEventListener('input',(event)=>{
        if(uname.trim() === ''){
            errUname.textContent = '* USERNAME MUST BE FILLED' ;
            isValid = false;
        } else {
            errUname.textContent = '' ;
        }
    }) 
}
*/
document.addEventListener('DOMContentLoaded', function() {
    // Validate Username
    const username = document.querySelector('.uname');
    const errUname = document.querySelector('.errUname');
    username.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            errUname.textContent = "* Username is required.";
            isValid = false;
        } else {
            errUname.textContent = "";
        }
    });

    // Validate Email
    const email = document.querySelector('.email');
    const errEmail = document.querySelector('.errEmail');
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
    const contact = document.querySelector('.contact');
    const errContact = document.querySelector('.errContact');
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

    // Validate Service field 
    const service = document.querySelector('.service');
    const errService = document.querySelector('.errService');
    service.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            errService.textContent = "* Service is required.";
            isValid = false;
        } else {
            errService.textContent = "";
        }
    });

    // Validate price 
    // const price = document.querySelector('.price');
    // const errPrice = document.querySelector('.errPrice');
    // price.addEventListener('input', function(event) {
    //     if (event.target.value.trim() === "") {
    //         errPrice.textContent = "* Price is required.";
    //         isValid = false;
    //     }else if(event.target.value > 1000){
    //         errPrice.textContent = "* Price must be less than 1000 .";
    //         isValid = false;
    //     }else if(event.target.value < 100){
    //         errPrice.textContent = "* Price must be greater than 100 .";
    //         isValid = false;
    //     } else {
    //         errPrice.textContent = "";
    //     }
    // });

    // Validate Password
    const password = document.querySelector('.pw');
    const errPw = document.querySelector('.errPw');
    password.addEventListener('input', function(event) {
        if (event.target.value.trim() === "") {
            errPw.textContent = "* Password is required.";
            isValid = false;
        } else {
            errPw.textContent = "";
        }
    });

    // Validate Confirm Password
    const confirmPassword = document.querySelector('.confirmPw');
    const errConfirmPw = document.querySelector('.errConfirmPw');
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
    document.querySelector('.RegistrationOfSp').addEventListener('submit', function(event) {
        if (isValid) {
            event.preventDefault();
        }
    });
});
