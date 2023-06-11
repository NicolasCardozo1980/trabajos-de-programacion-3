var _a;
(_a = document.getElementById('contactForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;
    if (validateForm()) {
        console.log('Form submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset form fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        // Reset form control styles
        resetForm();
    }
});
function validateForm() {
    var isValid = true;
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    if (name === '') {
        isValid = false;
        setErrorFor(nameInput, 'Name cannot be blank');
    }
    else {
        setSuccessFor(nameInput);
    }
    if (email === '') {
        isValid = false;
        setErrorFor(emailInput, 'Email cannot be blank');
    }
    else if (!isEmailValid(email)) {
        isValid = false;
        setErrorFor(emailInput, 'Email is not valid');
    }
    else {
        setSuccessFor(emailInput);
    }
    if (message === '') {
        isValid = false;
        setErrorFor(messageInput, 'Message cannot be blank');
    }
    else {
        setSuccessFor(messageInput);
    }
    return isValid;
}
function setErrorFor(input, errorMessage) {
    var formControl = input.parentElement;
    var span = formControl.querySelector('span');
    formControl.className = 'form-control error';
    span.innerText = errorMessage;
}
function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function resetForm() {
    var formControls = document.querySelectorAll('.form-control');
    formControls.forEach(function (formControl) {
        formControl.className = 'form-control';
    });
}
function isEmailValid(email) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
}
