const notificationForm = document.getElementById('launch-page-form');
const emailInput = document.getElementById('email');
const emailStatus = document.getElementById('email-status');

notificationForm.addEventListener('submit', e => {
    e.preventDefault();
    emailStatus.style.display = 'block';

    // ONLY CHECK IF @ EXIST, NOT A ROBUST EMAIL CHECK
    // When an error occurs
    if (emailInput.value === '' || !emailInput.value.includes('@')) {
        emailStatus.textContent = 'Please provide a valid email';
        emailStatus.classList.remove('text-input__status-message--success');
        emailStatus.classList.add('text-input__status-message--error');

        emailInput.classList.add('text-input__error');
        emailInput.classList.remove('text-input__success');
    }
    // When the input is valid
    else {
        emailStatus.textContent = 'Email has been sent!';
        emailStatus.classList.remove('text-input__status-message--error');
        emailStatus.classList.add('text-input__status-message--success');

        emailInput.classList.remove('text-input__error');
        emailInput.classList.add('text-input__success');
    }
})