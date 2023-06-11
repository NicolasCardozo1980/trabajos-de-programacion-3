document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const messageInput = document.getElementById('message') as HTMLTextAreaElement;

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

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
  let isValid = true;

  const nameInput = document.getElementById('name') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const messageInput = document.getElementById('message') as HTMLTextAreaElement;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    isValid = false;
    setErrorFor(nameInput, 'Name cannot be blank');
  } else {
    setSuccessFor(nameInput);
  }

  if (email === '') {
    isValid = false;
    setErrorFor(emailInput, 'Email cannot be blank');
  } else if (!isEmailValid(email)) {
    isValid = false;
    setErrorFor(emailInput, 'Email is not valid');
  } else {
    setSuccessFor(emailInput);
  }

  if (message === '') {
    isValid = false;
    setErrorFor(messageInput, 'Message cannot be blank');
  } else {
    setSuccessFor(messageInput);
  }

  return isValid;
}

function setErrorFor(input: HTMLInputElement | HTMLTextAreaElement, errorMessage: string) {
  const formControl = input.parentElement as HTMLDivElement;
  const span = formControl.querySelector('span') as HTMLSpanElement;

  formControl.className = 'form-control error';
  span.innerText = errorMessage;
}

function setSuccessFor(input: HTMLInputElement | HTMLTextAreaElement) {
  const formControl = input.parentElement as HTMLDivElement;
  formControl.className = 'form-control success';
}

function resetForm() {
  const formControls = document.querySelectorAll('.form-control') as NodeListOf<HTMLDivElement>;

  formControls.forEach((formControl) => {
    formControl.className = 'form-control';
  });
}

function isEmailValid(email: string) {
  return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
}
