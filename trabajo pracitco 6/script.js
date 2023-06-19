var form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var nameInput = form.querySelector('input[name="name"]');
        var emailInput = form.querySelector('input[name="email"]');
        var passwordInput = form.querySelector('input[name="password"]');
        if (nameInput && emailInput && passwordInput) {
            var name_1 = nameInput.value;
            var email = emailInput.value;
            var password = passwordInput.value;
            console.log(name_1, email, password);
        }
    });
}
