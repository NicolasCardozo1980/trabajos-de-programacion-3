const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');
    if (nameInput && emailInput && passwordInput) {
      const name = (nameInput as HTMLInputElement).value;
      const email = (emailInput as HTMLInputElement).value;
      const password = (passwordInput as HTMLInputElement).value;
      console.log(name, email, password);
    }
  });
}
